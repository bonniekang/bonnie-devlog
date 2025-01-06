import Link from 'next/link'

import {
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
  if (textStyle.link) classNames.push('underline cursor-pointer text-stone-500')

  return classNames
}

const createTextStyleProps = (
  annotation: AnnotationResponse,
  link: { url: string } | null,
): TTextStyleProps => {
  return { ...annotation, link }
}

export const RichText = ({ richTexts }: { richTexts: RichTextItemResponse[] }) => {
  // text | mention | equation 중 text 만 받는다
  const filteredRichTexts = richTexts.filter(
    (textObj): textObj is TextRichTextItemResponse => textObj.type === 'text',
  )
  return (
    <>
      {filteredRichTexts.map((richText: TextRichTextItemResponse, index) => {
        const textStyleProps = createTextStyleProps(richText.annotations, richText.text.link)

        // Inline code style
        if (richText.annotations.code) {
          return <code key={index}>{richText.text.content}</code>
        }

        // link
        if (richText.text.link) {
          return (
            <Link
              key={index}
              href={richText.text.link.url}
              className={`${getTextStyles(textStyleProps)}`}
              target="_blank"
            >
              {richText.text.content}
            </Link>
          )
        }

        // default
        return (
          <span key={index} className={`${getTextStyles(textStyleProps)}`}>
            {richText.text.content}
          </span>
        )
      })}
    </>
  )
}
