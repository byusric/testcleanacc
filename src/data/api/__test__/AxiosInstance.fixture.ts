import type { MockWebServer } from '@/tests/MockServicesWorker'

export function axiosGet(mockWebServer: MockWebServer): string {
  mockWebServer.addRequestHandlers([
    {
      method: 'get',
      endpoint: 'https://fakestoreapi.com/',
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
      endpoint: 'https://fakestoreapi.com/',
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
      endpoint: 'https://fakestoreapi.com/',
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
      endpoint: 'https://fakestoreapi.com/',
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
      endpoint: 'https://fakestoreapi.com/',
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
      endpoint: 'https://fakestoreapi.com/',
      httpStatusCode: 200,
      response: ''
    }
  ])

  return ''
}
