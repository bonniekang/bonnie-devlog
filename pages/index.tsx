import Link from 'next/link'
import { Inter } from 'next/font/google'

import { Button } from '@components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 ${inter.className}`}
    >
      <h1 className="py-10 text-3xl">블로그입니다.</h1>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <Link href="/projects">
          <Button>PROJECTS</Button>
        </Link>
        <Link href="/posts">
          <Button>POSTS</Button>
        </Link>
        <Link href="/archive">
          <Button>ARCHIVE</Button>
        </Link>
        <Link href="/">
          <Button>RESUME</Button>
        </Link>
        <Link href="/">
          <Button>SOCIAL</Button>
        </Link>
      </div>
    </main>
  )
}
