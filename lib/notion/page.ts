import { notion } from './client'

// page data
export const getPageData = async (pageId: string) => {
  return await notion.pages.retrieve({ page_id: pageId })
}
