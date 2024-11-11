import {
  QuoteBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Quote = ({ blockData }: { blockData: QuoteBlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.quote.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <div className="border-l-4">
      <RichText richTexts={richTexts} />
    </div>
  )
}
