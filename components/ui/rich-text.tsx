import Link from 'next/link'

import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

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

export const RichText = ({ richTexts }: { richTexts: TextRichTextItemResponse[] }) => {
  // text | mention | equation 중 text 만 받는다
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
