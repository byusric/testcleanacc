<template>
  <section class="section">
    <AppTable :tableConfig="tableConfig" :items="items" itemKey="id" />
  </section>
</template>
<script setup lang="ts">
import { markRaw } from 'vue'
import AppTable from '@/presentation/components/ui/table/AppTable.vue'
import ImageComponente from '@/presentation/components/ui/image/ImageComponente.vue'
import { useUseHome } from './useHome'

const { items } = useUseHome()

const tableConfig = [
  {
    name: 'Title',
    key: 'title'
  },
  {
    name: 'Price',
    key: 'price'
  },
  {
    name: 'Description',
    key: 'description'
  },
  {
    name: 'Category',
    key: 'category'
  },
  {
    name: 'Image',
    key: 'image',
    component: markRaw(ImageComponente)
  },
  {
    name: 'Rating',
    key: 'rating.rate'
  }
]
</script>
<style scoped>
.section {
  max-width: 90dvw;
  margin: 0 auto;
  overflow: hidden;
}
</style>
