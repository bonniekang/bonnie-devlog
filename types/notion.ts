export type TBlogPost = {
  subtitle: {
    id: string
    type: 'rich_text'
    rich_text: {
      type: 'text'
      text: {
        content: string
        link: string | null
      }
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
  active: {
    id: string
    type: 'checkbox'
    checkbox: boolean
  }
  tags: {
    id: string
    type: 'multi_select'
    multi_select: {
      id: string
      name: string
      color: string
    }[]
  }
  published: {
    id: string
    type: 'date'
    date: {
      start: string
      end: null
      time_zone: null
    }
  }
  name: {
    id: string
    type: 'title'
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
  properties: TBlogPost
  url: string
  public_url: string | null
}
