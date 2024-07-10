import AxiosInstance from '@/data/api/AxiosInstance'
import { ProductsRepository } from '@/data/ProductsRepository'
import type { ProductResponse } from '@/domain/interfaces/Product'
import { onMounted, ref } from 'vue'

export const useUseHome = () => {
  const pr = new ProductsRepository(AxiosInstance)

  const items = ref<ProductResponse[]>([])

  onMounted(() => {
    pr.getAll().then((res) => {
      items.value = res
    })
  })
  return { items }
}
