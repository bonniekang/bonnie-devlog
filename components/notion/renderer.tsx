import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Heading1, Heading2, Heading3 } from './headings'
import { Paragraph } from './paragraph'
import { Code } from './code'
import { Divider } from './divider'
import { NotionImage } from './image'
import { ListItem } from './list-item'
import { Quote } from './quote'
import { Callout } from './callout'

export const NotionRenderer = ({
  blockData,
  allBlocks,
  currentBlockIdx,
}: {
  blockData: BlockObjectResponse
  allBlocks: BlockObjectResponse[]
  currentBlockIdx: number
}) => {
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
      return (
        <ListItem
          allBlocks={allBlocks}
          currentBlockIdx={currentBlockIdx}
          listType={'bulleted_list_item'}
        />
      )
    case 'numbered_list_item':
      return (
        <ListItem
          allBlocks={allBlocks}
          currentBlockIdx={currentBlockIdx}
          listType={'numbered_list_item'}
        />
      )
    case 'quote':
      return <Quote blockData={blockData} />
    case 'callout':
      return <Callout blockData={blockData} />
    default:
      return null
  }
}
