import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const pageId = searchParams.get('pageId')

  if (!pageId) {
    return new Response(JSON.stringify({ error: 'Missing pageId' }), { status: 400 })
  }

  // blog/[pageId] 경로 재검증
  const path = `/blog/${pageId}`
  revalidatePath(path)

  return new Response(JSON.stringify({ revalidated: true, path }), { status: 200 })
}
