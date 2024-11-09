import { cache } from 'react'
import 'server-only'

import { notion } from './client'

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
