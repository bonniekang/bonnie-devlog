import Link from 'next/link'

export const Tag = ({ tagName }: { tagName: string }) => (
  <Link href={`/blog/tag/${encodeURIComponent(tagName)}`}>
    <li className="text-neutral-700 py-1 px-2 text-xs border-solid border rounded border-neutral-200 hover:bg-neutral-100">
      {tagName}
    </li>
  </Link>
)
