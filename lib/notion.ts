import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import 'server-only'

import { Client, isFullBlock, isNotionClientError, APIErrorCode } from '@notionhq/client'

import { config } from '@/config'

import { TBlogPostTag } from '@/types/notion'

// Initializing a notion client
export const notion = new Client({
  auth: config.notion.notionKey,
})

// all blog posts from notion database
const fetchBlogPostList = async () => {
  try {
    const databaseData = await notion.databases.query({
      database_id: config.notion.databaseId!,
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
      filter: {
        property: 'active',
        checkbox: {
          equals: true,
        },
      },
    })

    return databaseData.results
  } catch (error) {
    /**
     * Error codes
     *  Unauthorized = "unauthorized",
        RestrictedResource = "restricted_resource",
        ObjectNotFound = "object_not_found",
        RateLimited = "rate_limited",
        InvalidJSON = "invalid_json",
        InvalidRequestURL = "invalid_request_url",
        InvalidRequest = "invalid_request",
        ValidationError = "validation_error",
        ConflictError = "conflict_error",
        InternalServerError = "internal_server_error",
        ServiceUnavailable = "service_unavailable"
        RequestTimeout = "notionhq_client_request_timeout",
        ResponseError = "notionhq_client_response_error"
     */
    if (isNotionClientError(error) && error.code) {
      if (error.code === APIErrorCode.RateLimited) {
        // 요청 횟수 초과로 인한 에러일 경우, 일정시간 이후 재요청 시도
        console.log(error.code)
      } else {
        console.log(error.code)
      }
    } else {
      console.error('An unexpected error occurred:', error)
    }
    throw error
  }
}

export const getBlogPostList = unstable_cache(fetchBlogPostList, ['blog-posts'])

// Get all child blocks given a parent page ID
export const getBlockData = cache(async (pageId: string) => {
  let blocks = []

  let response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  })

  blocks = [...response.results]

  while (response.has_more && response.next_cursor) {
    response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: response.next_cursor,
    })
    blocks = [...blocks, ...response.results]
  }

  return blocks
})

// notion page content
export const getNotionPosts = cache(async (pageId: string) => {
  // block data 중 PartialBlockObjectResponse 제외
  const allBlocks = (await getBlockData(pageId)).filter(isFullBlock)
  // image block 추려내기
  const imgBlocks = allBlocks.filter((block) => 'type' in block && block.type === 'image')

  for (const imgBlock of imgBlocks) {
    // image type 이 file 인 경우에만 업데이트
    if ('image' in imgBlock && imgBlock.image.type === 'file') {
      const imgUrl = imgBlock.image.file.url.split('?')[0]
      const blockId = imgBlock.id
      await notion.blocks.update({
        block_id: blockId,
        image: {
          external: {
            url: `${config.notion.notionUrl}/image/${encodeURIComponent(imgUrl)}?table=block&id=${blockId}&cache=v2`,
          },
        },
      })
    }
  }

  return allBlocks
})

// filtering and extracting unique blog tags
export const extractUniqueTags = (blogPostList: TBlogPostTag[]): string[] => {
  return blogPostList
    .map(({ properties }) => properties.tags.multi_select)
    .flat()
    .reduce((acc: string[], tag) => {
      if (!acc.includes(tag.name)) {
        acc.push(tag.name)
      }
      return acc
    }, [])
}
