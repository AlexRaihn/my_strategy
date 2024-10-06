import { defineStore } from 'pinia'

export const UsersStore = defineStore('users', {
  state: () => {
    return {
      players: [
        {
          id: 1,
          name: 'Player 1',
          sectors: [],
          colors_type: 'primary',
          golds: 0,
          army: [],
          income: 1
        },
        {
          id: 2,
          name: 'Player 2',
          sectors: [],
          colors_type: 'danger',
          golds: 0,
          army: [],
          income: 1
        }
      ]
    }
  },
  actions: {}
})
