import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Posts',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  // computedFields: {
  //   url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  // },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
