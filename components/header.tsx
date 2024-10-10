import Link from 'next/link'

export const Header = () => (
  <div className="sticky top-0 bg-white w-full h-32 flex flex-col items-end justify-end underline text-xs gap-1 py-5 mb-5 sm:flex-row sm:justify-end sm:text-base sm:gap-3 border-b border-dashed border-slate-500">
    <Link href="/">home</Link>
    <Link href="/blog">blog</Link>
    <Link href="/projects">projects</Link>
    <Link href="/about">about</Link>
  </div>
)
