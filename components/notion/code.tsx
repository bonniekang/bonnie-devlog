import hljs from 'highlight.js'

import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const Code = ({ blockData }: { blockData: CodeBlockObjectResponse }) => {
  const content = blockData.code.rich_text.map((text) => text.plain_text).join('')
  const highlightedCode = hljs.highlight(content, {
    language: blockData.code.language,
  }).value

  return (
    <section>
      <pre className={`language-${blockData.code.language}`}>
        <code
          className={`language-${blockData.code.language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </section>
  )
}
