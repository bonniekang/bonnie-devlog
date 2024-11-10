import {
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Paragraph = ({ blockData }: { blockData: ParagraphBlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.paragraph.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <p className="">
      <RichText richTexts={richTexts} />
    </p>
  )
}
