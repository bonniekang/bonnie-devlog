import Link from 'next/link'

export const Tag = ({ tagName }: { tagName: string }) => (
  <li className="text-neutral-700 py-1 px-2 text-xs border-solid border rounded border-neutral-200 hover:bg-neutral-100">
    <Link href={`/blog/tag/${tagName}`}>{tagName}</Link>
  </li>
)
