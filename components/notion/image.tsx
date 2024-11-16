import Image from 'next/image'

import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { config } from '@/config'

import { notion } from '@/lib/notion'

const getImgUrl = async (blockData: ImageBlockObjectResponse) => {
  if (blockData.image.type === 'external') {
    return blockData.image.external.url
  } else {
    const newImgUrl = `${config.notion.notionUrl}/image/${encodeURIComponent(blockData.image.file.url.split('?')[0])}?table=block&id=${blockData.id}&cache=v2`

    await retryImageUpdate(blockData.id, newImgUrl)

    const response = await reloadImageBlock(blockData.id)

    if ('image' in response && response.image.type === 'external') {
      return response.image.external.url
    } else {
      return newImgUrl
    }
  }
}

const retryImageUpdate = async (blockId: string, newImgUrl: string) => {
  await notion.blocks.update({
    block_id: blockId,
    image: {
      external: {
        url: newImgUrl,
      },
    },
  })
}

const reloadImageBlock = async (blockId: string) => {
  return await notion.blocks.retrieve({
    block_id: blockId,
  })
}

export const NotionImage = async ({ blockData }: { blockData: ImageBlockObjectResponse }) => {
  const imgUrl = await getImgUrl(blockData)
  return (
    <Image
      src={imgUrl}
      width={768}
      height={400}
      style={{ width: '100%', height: 'auto' }}
      alt="blog-post-image"
    />
  )
}
