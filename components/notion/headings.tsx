import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

// All heading block objects, heading_1, heading_2, and heading_3
export const Heading1 = ({ blockData }: { blockData: Heading1BlockObjectResponse }) => {
  const heading1Id = blockData.heading_1.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h1 id={heading1Id}>
      <RichText richTexts={blockData.heading_1.rich_text} />
    </h1>
  )
}

export const Heading2 = ({ blockData }: { blockData: Heading2BlockObjectResponse }) => {
  const heading2Id = blockData.heading_2.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h2 id={heading2Id}>
      <RichText richTexts={blockData.heading_2.rich_text} />
    </h2>
  )
}

export const Heading3 = ({ blockData }: { blockData: Heading3BlockObjectResponse }) => {
  const heading3Id = blockData.heading_3.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h3 id={heading3Id}>
      <RichText richTexts={blockData.heading_3.rich_text} />
    </h3>
  )
}
