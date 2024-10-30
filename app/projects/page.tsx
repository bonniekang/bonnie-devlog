import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'projects',
  description: 'projects page',
  openGraph: {
    url: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <p>projects</p>
    </>
  )
}
