export default function BlogTagPage({ params }: { params: { tag: string } }) {
  const blogTag = params.tag

  return <>{blogTag}</>
}
