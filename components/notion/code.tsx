import hljs from 'highlight.js'

import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const Code = ({ blockData }: { blockData: CodeBlockObjectResponse }) => {
  const content = blockData.code.rich_text.map((text) => text.plain_text).join('')
  const language = hljs.getLanguage(blockData.code.language) ? blockData.code.language : 'plaintext'
  const highlightedCode = hljs.highlight(content, {
    language: language,
  }).value

  return (
    <section>
      <pre className={`language-${blockData.code.language}`}>
        <code
          className={`language-${blockData.code.language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode || '<i>No description provided.</i>' }}
        />
      </pre>
    </section>
  )
}
