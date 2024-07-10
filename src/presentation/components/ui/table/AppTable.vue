<template>
  <table class="max-dvw">
    <TableHeader :tableConfig />
    <tbody>
      <TableItem v-for="item in items" :key="item[itemKey]" :tableConfig :item />
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import TableHeader from './TableHeader.vue'
import TableItem from './TableItem.vue'
import type { TableConfig } from '@/domain/ui/table/TableConfig'

defineProps({
  tableConfig: { type: Array as PropType<TableConfig[]>, default: () => [] },
  items: { type: Array as PropType<Record<string, any>[]>, default: () => [] },
  itemKey: { type: String, default: '' }
})
</script>

<style scoped>
.max-dvw {
  table-layout: auto;
  border-spacing: 0;
  width: 100%;
}
</style>
