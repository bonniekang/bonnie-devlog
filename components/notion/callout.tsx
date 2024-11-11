import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { RichText } from './rich-text'

export const Callout = ({ blockData }: { blockData: CalloutBlockObjectResponse }) => {
  const icon = blockData.callout.icon
  const emoji = icon && icon.type === 'emoji' ? icon.emoji : null

  return (
    <div className="bg-gray-300">
      <span>{emoji}</span>
      <p className="">
        <RichText richTexts={blockData.callout.rich_text} />
      </p>
    </div>
  )
}
