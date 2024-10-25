import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { getBlockData } from './block'
import { config } from '@/config'

// Initializing a notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const n2m = new NotionToMarkdown({ notionClient: notion })

// notion page content
export const getNotionPosts = async (pageId: string) => {
  // image block 추려내기
  const allBlocks = await getBlockData(pageId)
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
            url: `${config.notion.notionUrl}/image/${encodeURIComponent(imgUrl)}?table=block&id=${imgBlocks[0].id}&cache=v2`,
          },
        },
      })
    }
  }

  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)
  return mdString.parent
}
