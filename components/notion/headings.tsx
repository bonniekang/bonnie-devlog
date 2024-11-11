import Link from 'next/link'

import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

// All heading block objects, heading_1, heading_2, and heading_3
export const Heading1 = ({ blockData }: { blockData: Heading1BlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.heading_1.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  const heading1Id = blockData.heading_1.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h1 id={heading1Id} className="">
      <Link href={`#${encodeURIComponent(heading1Id)}`}>
        <RichText richTexts={richTexts} />
      </Link>
    </h1>
  )
}

export const Heading2 = ({ blockData }: { blockData: Heading2BlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.heading_2.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  const heading2Id = blockData.heading_2.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h2 id={heading2Id} className="">
      <Link href={`#${encodeURIComponent(heading2Id)}`}>
        <RichText richTexts={richTexts} />
      </Link>
    </h2>
  )
}

export const Heading3 = ({ blockData }: { blockData: Heading3BlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.heading_3.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  const heading3Id = blockData.heading_3.rich_text
    .map((textBlock: RichTextItemResponse) => textBlock.plain_text)
    .join('')

  return (
    <h3 id={heading3Id} className="">
      <Link href={`#${encodeURIComponent(heading3Id)}`}>
        <RichText richTexts={richTexts} />
      </Link>
    </h3>
  )
}
