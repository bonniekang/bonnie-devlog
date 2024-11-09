import { isNotionClientError, APIErrorCode } from '@notionhq/client'

import { config } from '@/config'

import { notion } from './client'

// database list
export const getDatabaseData = async () => {
  try {
    const databaseData = await notion.databases.query({
      database_id: config.notion.databaseId!,
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
      filter: {
        property: 'active',
        checkbox: {
          equals: true,
        },
      },
    })

    return databaseData.results
  } catch (error) {
    /**
     * Error codes
     *  Unauthorized = "unauthorized",
        RestrictedResource = "restricted_resource",
        ObjectNotFound = "object_not_found",
        RateLimited = "rate_limited",
        InvalidJSON = "invalid_json",
        InvalidRequestURL = "invalid_request_url",
        InvalidRequest = "invalid_request",
        ValidationError = "validation_error",
        ConflictError = "conflict_error",
        InternalServerError = "internal_server_error",
        ServiceUnavailable = "service_unavailable"
        RequestTimeout = "notionhq_client_request_timeout",
        ResponseError = "notionhq_client_response_error"
     */
    if (isNotionClientError(error) && error.code) {
      if (error.code === APIErrorCode.RateLimited) {
        // 요청 횟수 초과로 인한 에러일 경우, 일정시간 이후 재요청 시도
        console.log(error.code)
      } else {
        console.log(error.code)
      }
    } else {
      console.error('An unexpected error occurred:', error)
    }
  }
}
