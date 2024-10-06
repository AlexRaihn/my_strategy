<template>
  <div class="flex flex-col gap-4 justify-center items-center">
    <GameGrid :col="10" :row="10" />
  </div>
</template>

<script setup lang="ts">
import GameGrid from '@/components/GameGrid/GameGrid.vue'
</script>
