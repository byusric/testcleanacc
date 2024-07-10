import type { ProductResponse } from './Product'

export interface ProductsRepository {
  getAll: () => Promise<ProductResponse>
}
