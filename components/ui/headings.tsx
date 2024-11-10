import Link from 'next/link'

import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

type AnnotationResponse = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color:
    | 'default'
    | 'gray'
    | 'brown'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red'
    | 'gray_background'
    | 'brown_background'
    | 'orange_background'
    | 'yellow_background'
    | 'green_background'
    | 'blue_background'
    | 'purple_background'
    | 'pink_background'
    | 'red_background'
}

type TTextStyleProps = AnnotationResponse & { link: { url: string } | null }

const getTextStyles = (textStyle: TTextStyleProps) => {
  const classNames = []

  if (textStyle.bold) classNames.push('font-bold')
  if (textStyle.italic) classNames.push('italic')
  if (textStyle.strikethrough) classNames.push('line-through')
  if (textStyle.underline) classNames.push('underline')
  if (textStyle.link) classNames.push('underline cursor-pointer')

  return classNames
}

const createTextStyleProps = (
  annotation: AnnotationResponse,
  link: { url: string } | null,
): TTextStyleProps => {
  return { ...annotation, link }
}

// text | mention | equation 중 text 만 받는다
export const RichText = ({ richTexts }: { richTexts: TextRichTextItemResponse[] }) => {
  return (
    <>
      {richTexts.map((richText, index) => {
        const textStyleProps = createTextStyleProps(richText.annotations, richText.text.link)

        if ((richText.type = 'text')) {
          return (
            <span key={index} className={`...${getTextStyles(textStyleProps)}`}>
              {richText.text.content}
            </span>
          )
        } else if (richText.text.link) {
          return (
            <Link
              key={index}
              href={richText.text.link.url}
              className={`...${getTextStyles(textStyleProps)}`}
              target="_blank"
            >
              {richText.text.content}
            </Link>
          )
        } else {
          return <span key={index}></span>
        }
      })}
    </>
  )
}

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
