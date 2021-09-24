import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    character: {}
  },
  mutations: {
    getCharacters(state, payload){
      state.characters = payload
    },
    getCharacter(state, payload){
      state.character = payload
    },
    
  },
  actions: {
    async allCharacters({commit}, character) {
      commit('getCharacters', [])
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        const array = await data.json();
        commit('getCharacters', array.results)
      } catch (error) {
        console.log(error);
      }
    },
    async getCharacter({commit}, id) {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const object = await data.json();
        commit('getCharacter', object)
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
