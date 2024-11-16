import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const ListItem = ({
  allBlocks,
  currentBlockIdx,
  listType,
}: {
  allBlocks: BlockObjectResponse[]
  currentBlockIdx: number
  listType: 'bulleted_list_item' | 'numbered_list_item'
}) => {
  // Check if current block is the start of a group
  const isStart = !isListItem(allBlocks[currentBlockIdx - 1])

  // isStart 일 때만 generate 하고 아니면 null
  const listItems = isStart ? collectListItems(allBlocks, currentBlockIdx) : null

  const Wrapper = getListWrapper(listType)

  if (!listItems) return null

  return (
    <Wrapper>
      {listItems.map((item) => (
        <li key={item.id}>
          <RichText richTexts={getRichText(item, listType)} />
        </li>
      ))}
    </Wrapper>
  )
}

// helper functions
const isListItem = (
  block: BlockObjectResponse,
  // type: 'bulleted_list_item' | 'numbered_list_item',
) => block?.type === 'bulleted_list_item' || block?.type === 'numbered_list_item'

const collectListItems = (allBlocks: BlockObjectResponse[], startIndex: number) => {
  let currentIndex = startIndex
  const listItems = []

  // Continue while the current block matches the list item type
  while (currentIndex < allBlocks.length && isListItem(allBlocks[currentIndex])) {
    listItems.push(allBlocks[currentIndex])
    currentIndex++
  }

  return listItems
}

const getRichText = (item: BlockObjectResponse, listType: string) =>
  listType === 'bulleted_list_item'
    ? (item as BulletedListItemBlockObjectResponse).bulleted_list_item.rich_text
    : (item as NumberedListItemBlockObjectResponse).numbered_list_item.rich_text

const getListWrapper = (listType: 'bulleted_list_item' | 'numbered_list_item') => {
  return listType === 'bulleted_list_item' ? 'ul' : 'ol'
}
