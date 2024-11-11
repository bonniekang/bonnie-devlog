import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { RichText } from './rich-text'

export const NumberedListItem = ({
  blockData,
}: {
  blockData: NumberedListItemBlockObjectResponse
}) => {
  const richTexts = blockData.numbered_list_item.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <ol>
      <li key={blockData.id}>
        <RichText richTexts={richTexts} />
      </li>
    </ol>
  )
}

export const BulletedListItem = ({
  blockData,
}: {
  blockData: BulletedListItemBlockObjectResponse
}) => {
  const richTexts = blockData.bulleted_list_item.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <ul>
      <li key={blockData.id}>
        <RichText richTexts={richTexts} />
      </li>
    </ul>
  )
}
