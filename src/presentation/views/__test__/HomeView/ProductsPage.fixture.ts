import type { MockWebServer } from '@/tests/MockServicesWorker'
import productsResponse from './data/productsResponse.json'
import type { ProductResponse } from '@/domain/interfaces/Product'

export function givenAProducts(mockWebServer: MockWebServer): ProductResponse[] {
  mockWebServer.addRequestHandlers([
    {
      method: 'get',
      endpoint: new URL('products', import.meta.env.VITE_API_URL).href,
      httpStatusCode: 200,
      response: productsResponse
    }
  ])

  return productsResponse
}
