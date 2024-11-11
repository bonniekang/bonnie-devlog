import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const Code = ({ blockData }: { blockData: CodeBlockObjectResponse }) => {
  const content = blockData.code.rich_text.map((text) => text.plain_text).join('')

  return (
    <div className="prose prose-neutral max-w-none">
      <pre className={`language-${blockData.code.language}`}>
        <code className={`language-${blockData.code.language}`}>{content}</code>
      </pre>
    </div>
  )
}
