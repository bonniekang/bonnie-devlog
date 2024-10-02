import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default async function Page() {
  return (
    <>
      <Button variant={'link'}>
        <Link href={'/about/'}>about</Link>
      </Button>
      <Button variant={'link'}>
        <Link href={'/projects/'}>projects</Link>
      </Button>
      <Button variant={'link'}>
        <Link href={'/blog/'}>blog</Link>
      </Button>
    </>
  )
}
