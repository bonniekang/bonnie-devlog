import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Heading1, Heading2, Heading3 } from './headings'
import { Paragraph } from './paragraph'
import { Code } from './code'
import { Divider } from './divider'
import { NotionImage } from './image'
import { BulletedListItem, NumberedListItem } from './list-item'
import { Quote } from './quote'

export const NotionRenderer = ({ blockData }: { blockData: BlockObjectResponse }) => {
  switch (blockData.type) {
    case 'heading_1':
      return <Heading1 blockData={blockData} />
    case 'heading_2':
      return <Heading2 blockData={blockData} />
    case 'heading_3':
      return <Heading3 blockData={blockData} />
    case 'paragraph':
      return <Paragraph blockData={blockData} />
    case 'code':
      return <Code blockData={blockData} />
    case 'divider':
      return <Divider />
    case 'image':
      return <NotionImage blockData={blockData} />
    case 'bulleted_list_item':
      return <BulletedListItem blockData={blockData} />
    case 'numbered_list_item':
      return <NumberedListItem blockData={blockData} />
    case 'quote':
      return <Quote blockData={blockData} />
    default:
      return null
  }
}
