import {
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Paragraph = ({ blockData }: { blockData: ParagraphBlockObjectResponse }) => {
  const richTexts = blockData.paragraph.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <p>
      <RichText richTexts={richTexts} />
    </p>
  )
}
