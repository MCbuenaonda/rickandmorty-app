<template>
    <div v-if="character">
        <detail-component :data="character"/>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import DetailComponent from '../components/DetailComponent.vue';
export default {
    created(){
        this.getCharacter(this.$route.params.id)
    },
    components: {
        DetailComponent
    },
    methods: {
        ...mapActions(['getCharacter'])
    },
    computed: {
        ...mapState(['character'])
    }
}
</script>

<style>

</style>