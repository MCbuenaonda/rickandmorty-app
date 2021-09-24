<template>
    <div class="card shadow mb-3 mx-4 animate__animated animate__flipInX" >
        <img :src="info.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">{{info.name}}</h5>
            <div class="text-center">
                <router-link :to="`/detail/${info.id}`" class="btn btn-primary">Ver personaje</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['info'],
    created(){ }
}
</script>

<style>

</style>