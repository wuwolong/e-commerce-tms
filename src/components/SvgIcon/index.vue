<template>
  <div>我是svg</div>
  <svg aria-hidden="true" :style="{ width, height }">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const { prefix, name, color } = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  width: {
    type: String,
    default: '50px',
  },
  height: {
    type: String,
    default: '50px',
  },
})
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<style scoped></style>
