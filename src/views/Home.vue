<template>
  <div class="">
    <div class="py-4 bg-dark mb-3">
      <form class="container" @submit.prevent="allCharacters(search)">
        <div class="row">
          <div class="col-md-8">
            <input type="text" class="form-control" id="search" v-model.trim="search">
          </div>
          <div class="col-md-4">
            <button type="submit" class="btn btn-primary mb-2">Buscar personaje</button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="characters === undefined" class="text-center container">
      <div class="alert alert-danger animate__animated animate__flash" role="alert">
        <h2>
          No se encontraron coincidencias
        </h2>
      </div>
    </div>

    <div class="row">      
      <div v-for="(item, index) in characters" :key="index" class="col-md-3">
        <card-component :info="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'Home',
  components: {
    CardComponent
  },
  data() {
    return {
      info: '',
      search: ''
    }
  },
  created() { },
  methods: {
    ...mapActions(['allCharacters'])
  },
  computed: {
    ...mapState(['characters'])
  }
}
</script>
