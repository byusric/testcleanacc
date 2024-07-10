<template>
  <tr>
    <td v-for="config in tableConfig" :key="config.name + config.key">
      <component
        :is="config.component"
        v-if="config.component"
        :value="getObjectValue(config.key ?? '', item)"
      />
      <span v-else class="table-item">{{ getObjectValue(config.key ?? '', item) }}</span>
    </td>
  </tr>
</template>
<script lang="ts" setup>
import type { TableConfig } from '@/domain/ui/table/TableConfig'
import { getObjectValue } from '@/utils/getObjectValue'
import type { PropType } from 'vue'

defineProps({
  tableConfig: { type: Array as PropType<TableConfig[]>, default: () => [] },
  item: { type: Object as PropType<Record<string, any>>, default: () => ({}) }
})
</script>
<style scoped>
.table-item {
  padding: 8px;
}
</style>
