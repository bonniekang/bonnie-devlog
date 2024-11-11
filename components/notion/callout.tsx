import {
  CalloutBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Callout = ({ blockData }: { blockData: CalloutBlockObjectResponse }) => {
  const richTexts: TextRichTextItemResponse[] = blockData.callout.rich_text.filter(
    (textObj: RichTextItemResponse) => textObj.type === 'text',
  )

  const icon = blockData.callout.icon
  const emoji = icon && icon.type === 'emoji' ? icon.emoji : null

  return (
    <div className="bg-gray-300">
      <span className="">{emoji}</span>
      <p className="">
        <RichText richTexts={richTexts} />
      </p>
    </div>
  )
}
