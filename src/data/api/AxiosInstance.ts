import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import type { ApiService } from '@/domain/interfaces/ApiService'

export class ApiClientService {
  private readonly service: ApiService
  private static instance: ApiClientService

  public constructor() {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    addInterceptors(instance)

    this.service = createApiServiceAxios(instance)
  }

  getService = () => {
    return this.service
  }

  public static getInstance(): ApiClientService {
    if (!ApiClientService.instance) {
      ApiClientService.instance = new ApiClientService()
    }
    return ApiClientService.instance
  }
}

const addInterceptors = (service: AxiosInstance) => {
  service.interceptors.response.use(
    (value: AxiosResponse<any, any>) => {
      return value
    },
    (error) => {
      if (error.response.status === 401) {
        // TODO: Handle if is unauthorized
      }
      return Promise.reject({
        status: error.response && error.response.status,
        response: error.response || error
      })
    }
  )

  service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // TODO: handle if have token
    return config
  })
}

const createApiServiceAxios = (axios: AxiosInstance): ApiService => ({
  get: async function <T = any, P = any>(url: string, params?: P): Promise<T> {
    return (
      await axios.get<T>(url, {
        params
      })
    ).data
  },
  post: async function <T = any, P = any>(
    url: string,
    data: P,
    params?: Record<string, any>
  ): Promise<T> {
    return (await axios.post<T, any, P>(url, data, { params })).data
  },
  postMultipart: async function <T = any>(
    url: string,
    data: FormData,
    params?: Record<string, any>
  ): Promise<T> {
    return (
      await axios.post<T, any, FormData>(url, data, {
        params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    ).data
  },
  patch: async function <T = any, P = any>(
    url: string,
    data: P,
    params?: Record<string, any>
  ): Promise<T> {
    return (
      await axios.patch<T, any, P>(url, data, {
        params
      })
    ).data
  },
  patchMultipart: async function <T = any>(
    url: string,
    data: FormData,
    params?: Record<string, any>
  ): Promise<T> {
    return (
      await axios.patch<T, any, FormData>(url, data, {
        params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    ).data
  },
  delete: async function (url: string): Promise<void> {
    return (await axios.delete(url)).data
  },
  put: async function <T = any, P = any>(
    url: string,
    data: P,
    params?: Record<string, any>
  ): Promise<T> {
    return (
      await axios.put<T, any, P>(url, data, {
        params
      })
    ).data
  },
  putMultipart: async function <T = any>(
    url: string,
    data: FormData,
    params?: Record<string, any>
  ): Promise<T> {
    return (
      await axios.put<T, any, FormData>(url, data, {
        params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    ).data
  }
})

export default new ApiClientService().getService()
