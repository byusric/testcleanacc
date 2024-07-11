<template>
  <tr v-memo="[tableConfig, item]">
    <td v-for="config in tableConfig" :key="config.name + config.key">
      <span v-if="!config.component" class="table-item">{{
        getObjectValue(config.key ?? '', item)
      }}</span>
      <component v-else :is="config.component" :value="getObjectValue(config.key ?? '', item)" />
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
