import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

// Initializing a notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const n2m = new NotionToMarkdown({ notionClient: notion })

// notion page content
export const getNotionPosts = async (pageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)
  return mdString.parent
}
