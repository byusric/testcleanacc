import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import productsResponse from './data/productsResponse.json'
import { MockWebServer } from '@/tests/MockServicesWorker'
import { givenAProducts } from './ProductsPage.fixture'
import HomeView from '../../home/HomeView.vue'

const mockWebServer = new MockWebServer()

describe('HelloWorld', () => {
  beforeAll(() => mockWebServer.start())
  afterEach(() => mockWebServer.resetHandlers())
  afterAll(() => mockWebServer.close())

  it('renders properly', async () => {
    givenAProducts(mockWebServer)
    const wrapper = mount(HomeView)
    expect(wrapper.find('table').exists()).toBeTruthy()
    await flushPromises()
    expect(wrapper.findAll('tr').length).toBe(productsResponse.length + 1)
  })
})
