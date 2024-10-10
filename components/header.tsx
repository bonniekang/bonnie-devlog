import Link from 'next/link'

export const Header = () => (
  <div className="sticky top-0 bg-white w-full flex flex-col items-end underline text-xs gap-1 py-5 sm:flex-row sm:justify-end sm:text-base sm:gap-3">
    <Link href="/">home</Link>
    <Link href="/blog">blog</Link>
    <Link href="/projects">projects</Link>
    <Link href="/about">about</Link>
  </div>
)
