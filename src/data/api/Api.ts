export interface ApiService {
  get: <T = any, P = any>(url: string, params?: P) => Promise<T>
  post: <T = any, P = any>(url: string, data: P, params: Record<string, any>) => Promise<T>
  postMultipart: <T = any>(url: string, data: FormData, params: Record<string, any>) => Promise<T>
  patch: <T = any, P = any>(url: string, data: P, params: Record<string, any>) => Promise<T>
  patchMultipart: <T = any>(url: string, data: FormData, params: Record<string, any>) => Promise<T>
  delete: (url: string) => Promise<void>
}
