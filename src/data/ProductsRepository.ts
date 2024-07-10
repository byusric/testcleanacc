import type { ProductResponse } from '@/domain/interfaces/Product'
import type { ApiService } from '../domain/interfaces/ApiService'

export class ProductsRepository {
  private readonly uri = 'products'
  constructor(private api: ApiService) {}

  async getAll(): Promise<ProductResponse[]> {
    return this.api.get<ProductResponse[]>(this.uri)
  }

  async get(id: string): Promise<ProductResponse> {
    return this.api.get<ProductResponse>(`${this.uri}/${id}`)
  }
}
