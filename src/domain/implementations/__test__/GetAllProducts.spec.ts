import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

import { flushPromises } from '@vue/test-utils'
import { MockWebServer } from '@/tests/MockServicesWorker'
import { givenAProducts } from '@/presentation/views/__test__/HomeView/ProductsPage.fixture'
import { GetAllProducts } from '../GetAllProducts'
import { ProductsRepository } from '@/data/ProductsRepository'
import AxiosInstance from '@/data/api/AxiosInstance'
import productsResponse from '@/presentation/views/__test__/HomeView/data/productsResponse.json'

const mockWebServer = new MockWebServer()

describe('Get All Products Correctly', () => {
  beforeAll(() => mockWebServer.start())
  afterEach(() => mockWebServer.resetHandlers())
  afterAll(() => mockWebServer.close())

  it('renders properly', async () => {
    givenAProducts(mockWebServer)

    const productsRepo = new ProductsRepository(AxiosInstance)
    const products = await new GetAllProducts(productsRepo).execute()
    await flushPromises()
    expect(JSON.stringify(products)).toBe(JSON.stringify(productsResponse))
  })
})
