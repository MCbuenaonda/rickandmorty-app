<template>
    <div class="py-4 bg-dark mb-3">
        <form class="row container" @submit.prevent="procesarForm">
            <div class="row">
                <div class="col-md-8">
                    <input type="text" class="form-control" id="character" v-model.trim="character">
                </div>
                <div class="col-md-4">
                    <button type="button" class="btn btn-primary mb-2">Buscar personaje</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            character: ''      
        }
    },
    methods:{
        procesarForm(){
            console.log(this.search);
        }
    }
}
</script>

<style>

</style>