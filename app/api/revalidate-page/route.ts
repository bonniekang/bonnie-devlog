import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    const { pageId } = await request.json()

    if (!pageId) {
      return new Response(JSON.stringify({ error: 'Missing pageId' }), { status: 400 })
    }

    const path = `/blog/${pageId}`
    revalidatePath(path)

    return new Response(JSON.stringify({ revalidated: true, path }), { status: 200 })
  } catch (error) {
    console.error(error, ':error from revalidate path')
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}
