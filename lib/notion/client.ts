import { cache } from 'react'
import 'server-only'

import { Client, isFullBlock } from '@notionhq/client'

import { config } from '@/config'

import { getBlockData } from './block'

// Initializing a notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
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
