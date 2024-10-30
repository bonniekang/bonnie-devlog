import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { BASE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'blog',
    template: '%s | blog',
  },
  description: 'This is my blog.',
  openGraph: {
    title: 'blog', // default 값 빼기
    description: 'This is my blog.', // default 값 빼기
    url: '/',
    siteName: 'My blog',
    locale: 'ko_KR',
    type: 'website',
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // 'max-video-preview': -1,
      // 'max-image-preview': 'large',
      // 'max-snippet': -1,
    },
  },
  // icons: {},
  // alternates: {
  //   canonical: '/',
  // },
  // themeColor:[]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          'bg-background font-mono max-w-full mx-auto px-9 pb-9  md:max-w-screen-md text-stone-700'
        }
      >
        <Header />
        <div className={'break-all'}>{children}</div>
      </body>
    </html>
  )
}
