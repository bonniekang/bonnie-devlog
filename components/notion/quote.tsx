import {
  QuoteBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Quote = ({ blockData }: { blockData: QuoteBlockObjectResponse }) => {
  const richTexts = blockData.quote.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  return (
    <blockquote>
      <RichText richTexts={richTexts} />
    </blockquote>
  )
}
