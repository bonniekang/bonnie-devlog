import { revalidateTag } from 'next/cache'

export async function POST() {
  try {
    // Revalidate cache for 'blog-posts' tag
    revalidateTag('blog-posts')

    return new Response(
      JSON.stringify({ success: true, message: 'Cache invalidated for blog-posts' }),
      { status: 200 },
    )
  } catch (error) {
    console.error('Error during cache revalidation:', error)

    return new Response(JSON.stringify({ success: false, message: 'Failed to invalidate cache' }), {
      status: 500,
    })
  }
}
