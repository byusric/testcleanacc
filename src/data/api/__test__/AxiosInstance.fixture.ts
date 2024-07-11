import type { MockWebServer } from '@/tests/MockServicesWorker'

const url = import.meta.env.VITE_API_URL

export function axiosGet(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'get',
      endpoint: url,
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}

export function axiosGetError(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'get',
      endpoint: url,
      httpStatusCode: 401,
      response: ''
    }
  ])

  return ''
}

export function axiosPost(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'post',
      endpoint: url,
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}

export function axiosPatch(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'patch',
      endpoint: url,
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}

export function axiosPut(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'put',
      endpoint: url,
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}

export function axiosDelete(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'delete',
      endpoint: url,
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}
