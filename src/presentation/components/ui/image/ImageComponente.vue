<template>
  <img :src="value" alt="Image" width="64em" />
</template>
<script lang="ts" setup>
defineProps({
  value: { type: String }
})
</script>
