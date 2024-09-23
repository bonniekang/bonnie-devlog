import '@/styles/globals.css'
import { cn } from '@/lib/utils'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background')}>{children}</body>
    </html>
  )
}
