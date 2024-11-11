import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const NumberedListItem = ({
  blockData,
}: {
  blockData: NumberedListItemBlockObjectResponse
}) => {
  return (
    <ol>
      <li key={blockData.id}>
        <RichText richTexts={blockData.numbered_list_item.rich_text} />
      </li>
    </ol>
  )
}

export const BulletedListItem = ({
  blockData,
}: {
  blockData: BulletedListItemBlockObjectResponse
}) => {
  return (
    <ul>
      <li key={blockData.id}>
        <RichText richTexts={blockData.bulleted_list_item.rich_text} />
      </li>
    </ul>
  )
}
