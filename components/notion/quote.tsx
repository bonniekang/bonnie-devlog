import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Quote = ({ blockData }: { blockData: QuoteBlockObjectResponse }) => {
  return (
    <blockquote>
      <RichText richTexts={blockData.quote.rich_text} />
    </blockquote>
  )
}
