export type TBlogPost = {
  ID: {
    id: string
    type: string
    unique_id: {
      prefix: string | null
      number: number
    }
  }
  Tags: {
    id: string
    type: string
    multi_select: { id: string; name: string; color: string }[]
  }
  'Created time': {
    id: string
    type: string
    created_time: string
  }
  Name: {
    id: string
    type: string
    title: {
      type: string
      text: { content: string; link: string | null }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
      }
      plain_text: string
      href: string | null
    }[]
  }
}

export type TBlogList = {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: {
    object: string
    id: string
  }
  last_edited_by: {
    object: string
    id: string
  }
  cover: string | null
  icon: string | null
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  in_trash: boolean
  properties: {
    ID: {
      id: string
      type: string
      unique_id: {
        prefix: string | null
        number: number
      }
    }
    Tags: {
      id: string
      type: string
      multi_select: {
        id: string
        name: string
        color: string
      }[]
    }
    'Created time': {
      id: string
      type: string
      created_time: string
    }
    Name: {
      id: string
      type: string
      title: {
        type: string
        text: { content: string; link: string | null }
        annotations: {
          bold: boolean
          italic: boolean
          strikethrough: boolean
          underline: boolean
          code: boolean
          color: string
        }
        plain_text: string
        href: string | null
      }[]
    }
  }
  url: string
  public_url: string | null
}
