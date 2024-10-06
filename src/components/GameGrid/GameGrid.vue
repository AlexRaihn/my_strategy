<template>
  <div class="flex flex-col">
    <div v-if="!isLoading">
      <div v-if="sectors.length > 0">
        <div v-for="(n, rowIndex) in col" :key="rowIndex" class="flex">
          <div v-for="(j, colIndex) in row" :key="colIndex">
            <GameGridSector :sector_data="sectors[rowIndex][colIndex]" />
          </div>
        </div>
      </div>
      <div v-else>Данные не найдены</div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script setup lang="ts">
import GameGridSector from './GameGridSector.vue'
import { UsersStore } from '@/stores/UsersStore'

const useUsersStore = UsersStore()

let props = defineProps({
  row: {
    type: Number,
    required: true
  },
  col: {
    type: Number,
    required: true
  }
})

let isLoading = false

const sectors = [] as Sectors.Sector[][]

function generateMap() {
  let id_iteration = 0
  for (let i = 0; i < props.col; i++) {
    sectors[i] = []
    for (let j = 0; j < props.row; j++) {
      id_iteration++
      sectors[i][j] = {
        id: id_iteration,
        type: 2,
        max_unit_limit: 0,
        count_unit_limit: 0,
        max_build_limit: 0,
        count_build_limit: 0,
        bg_img: '',
        player_id: 0,
        colors_type: 'gray_light'
      }
    }
  }
}

function getStartPlayerXY(player) {
  let colIndex = Math.floor(Math.random() * props.col)
  let rowIndex = Math.floor(Math.random() * props.row)
  sectors[colIndex][rowIndex].player_id = player.id
  sectors[colIndex][rowIndex].colors_type = player.colors_type
  player.sectors.push(sectors[colIndex][rowIndex].id)
  return player
}

generateMap()
useUsersStore.players[0] = getStartPlayerXY(useUsersStore.players[0])
useUsersStore.players[1] = getStartPlayerXY(useUsersStore.players[1])
</script>
