import { config } from '@/config'

import { notion } from './client'

const getDatabaseData = async () => {
  const databaseData = await notion.databases.query({
    database_id: config.notion.databaseId!,
    sorts: [
      {
        property: 'published',
        direction: 'descending',
      },
    ],
  })

  return databaseData.results
}
