import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

import { flushPromises } from '@vue/test-utils'
import { MockWebServer } from '@/tests/MockServicesWorker'
import AxiosInstance, { ApiClientService } from '@/data/api/AxiosInstance'
import {
  axiosDelete,
  axiosGet,
  axiosGetError,
  axiosPatch,
  axiosPost,
  axiosPut
} from './AxiosInstance.fixture'
import type { AxiosError } from 'axios'

const mockWebServer = new MockWebServer()

describe('Axios Instance', () => {
  beforeAll(() => mockWebServer.start())
  afterEach(() => mockWebServer.resetHandlers())
  afterAll(() => mockWebServer.close())

  it('correct instance', async () => {
    expect(new ApiClientService().getService()).toBeTruthy()
  })

  it('get properly', async () => {
    axiosGet(mockWebServer)
    const resp = await AxiosInstance.get('')
    await flushPromises()
    expect(resp).toBe('')
  })

  it('get reject', async () => {
    axiosGetError(mockWebServer)
    try {
      await AxiosInstance.get('')
      await flushPromises()
    } catch (error) {
      expect((error as AxiosError).status).toBe(401)
    }
  })

  it('post properly', async () => {
    axiosPost(mockWebServer)
    const resp = await AxiosInstance.post('', {})
    await flushPromises()
    expect(resp).toBe('')
  })

  it('post multipart properly', async () => {
    axiosPost(mockWebServer)
    const resp = await AxiosInstance.postMultipart('', new FormData())
    await flushPromises()
    expect(resp).toBe('')
  })

  it('patch properly', async () => {
    axiosPatch(mockWebServer)
    const resp = await AxiosInstance.patch('', {})
    await flushPromises()
    expect(resp).toBe('')
  })

  it('patch multipart properly', async () => {
    axiosPatch(mockWebServer)
    const resp = await AxiosInstance.patchMultipart('', new FormData())
    await flushPromises()
    expect(resp).toBe('')
  })

  it('put properly', async () => {
    axiosPut(mockWebServer)
    const resp = await AxiosInstance.put('', {})
    await flushPromises()
    expect(resp).toBe('')
  })

  it('put multipart properly', async () => {
    axiosPut(mockWebServer)
    const resp = await AxiosInstance.putMultipart('', new FormData())
    await flushPromises()
    expect(resp).toBe('')
  })

  it('delete properly', async () => {
    axiosDelete(mockWebServer)
    const resp = await AxiosInstance.delete('')
    await flushPromises()
    expect(resp).toBe('')
  })
})
