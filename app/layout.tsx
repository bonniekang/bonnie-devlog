import '@/styles/globals.css'

import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'

import { inter } from './fonts'

import { config } from '@/config'

import { BASE_URL, GTM_ID, META_DATA } from '@/lib/constants'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: META_DATA.title,
    template: '%s | bonniekang',
  },
  description: META_DATA.description,
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    url: '/',
    siteName: META_DATA.title,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/opengraph-image.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  twitter: {
    title: META_DATA.title,
    description: META_DATA.description,
    images: {
      url: '/opengraph-image.png',
    },
  },
  verification: {
    google: config.google.verificationValue,
  },
  other: {
    'naver-site-verification': config.naver.verificationValue,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <GoogleTagManager gtmId={GTM_ID} />
      <body
        className={`bg-background font-mono max-w-full mx-auto px-9 md:max-w-screen-md text-stone-700 ${inter.className}`}
      >
        <div className="flex flex-col min-h-screen justify-between">
          <div>
            <Header />
            <main className={'break-all w-full pb-24'}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
