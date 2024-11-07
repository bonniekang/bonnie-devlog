import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'about',
  description: 'about page',
  openGraph: {
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <p>about</p>
    </>
  )
}
