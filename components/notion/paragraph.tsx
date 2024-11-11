import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Paragraph = ({ blockData }: { blockData: ParagraphBlockObjectResponse }) => {
  return (
    <p>
      <RichText richTexts={blockData.paragraph.rich_text} />
    </p>
  )
}
