<template>
  <div
    :class="{
      'bg-gray_light': sector_data.colors_type === 'gray_light',
      'bg-primary': sector_data.colors_type === 'primary',
      'bg-danger': sector_data.colors_type === 'danger'
    }"
    class="border border-[1px] min-w-[100px] min-h-[100px] flex flex-col justify-center items-center gap-2"
  >
    <div v-if="sector_data.player_id == 0" v-html="sector_types[sector_data.type].icon"></div>
    <div v-else>Игрок</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { sector_types } from '@/defModels/sectros'

defineProps({
  sector_data: {
    type: Object as PropType<Sectors.Sector>,
    required: true
  }
})
</script>
