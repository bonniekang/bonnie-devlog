import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { RichText } from './rich-text'

export const NumberedListItem = ({
  currentBlock,
  allBlocks,
  currentBlockIndex,
}: {
  currentBlock: NumberedListItemBlockObjectResponse
  allBlocks: BlockObjectResponse[]
  currentBlockIndex: number
}) => {
  const listItems = combineAllListItems(
    currentBlock,
    allBlocks,
    currentBlockIndex,
  ) as NumberedListItemBlockObjectResponse[]

  return (
    <ol>
      {listItems.map((item, index) => {
        const richTexts: TextRichTextItemResponse[] = item.numbered_list_item.rich_text.filter(
          (textObj: RichTextItemResponse) => textObj.type === 'text',
        )

        return (
          <li key={index}>
            <RichText richTexts={richTexts} />
          </li>
        )
      })}
    </ol>
  )
}

export const BulletedListItem = ({
  currentBlock,
  allBlocks,
  currentBlockIndex,
}: {
  currentBlock: BulletedListItemBlockObjectResponse
  allBlocks: BlockObjectResponse[]
  currentBlockIndex: number
}) => {
  const listItems = combineAllListItems(
    currentBlock,
    allBlocks,
    currentBlockIndex,
  ) as BulletedListItemBlockObjectResponse[]

  return (
    <ul>
      {listItems.map((item, index) => {
        const richTexts: TextRichTextItemResponse[] = item.bulleted_list_item.rich_text.filter(
          (textObj: RichTextItemResponse) => textObj.type === 'text',
        )

        return (
          <li key={index}>
            <RichText richTexts={richTexts} />
          </li>
        )
      })}
    </ul>
  )
}

const combineAllListItems = (
  currentBlock: BlockObjectResponse,
  allBlocks: BlockObjectResponse[],
  currentBlockIndex: number,
) => {
  const endIndex = allBlocks
    .slice(currentBlockIndex)
    .findIndex((block) => block.type !== currentBlock.type)

  return endIndex === -1
    ? allBlocks.slice(currentBlockIndex)
    : allBlocks.slice(currentBlockIndex, currentBlockIndex + endIndex)
}
