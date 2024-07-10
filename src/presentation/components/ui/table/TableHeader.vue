<template>
  <thead v-memo="tableConfig">
    <tr>
      <td v-for="config in tableConfig" :key="config.name + config.key">
        <span class="table-header">{{ config.name }}</span>
      </td>
    </tr>
  </thead>
</template>
<script lang="ts" setup>
import type { TableConfig } from '@/domain/ui/table/TableConfig'
import type { PropType } from 'vue'

defineProps({
  tableConfig: { type: Array as PropType<TableConfig[]>, default: () => [] }
})
</script>
<style scoped>
td {
  height: 36px;
}
.table-header {
  padding: 8px;
  background: #0fc;
  color: black;
  width: 100%;
  display: flex;
}
</style>
