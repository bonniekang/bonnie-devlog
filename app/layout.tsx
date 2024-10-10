import { Header } from '@/components/header'
import '@/styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'bg-background font-mono max-w-full mx-auto px-9 pb-9  sm:max-w-xl'}>
        <Header />
        {children}
      </body>
    </html>
  )
}
