import type { ProductsRepository } from '@/data/ProductsRepository'
import type { Getimplementation } from '../interfaces/GetImplementation'
import type { ProductResponse } from '../interfaces/Product'

export class GetAllProducts implements Getimplementation<ProductResponse[]> {
  constructor(private repo: ProductsRepository) {}
  async execute() {
    return await this.repo.getAll()
  }
}
