<template>
    <div class="container">
        <h2>Detalles de: {{data.name}}</h2>
        <div class="card shadow mt-5 text-center animate__animated animate__rollIn">
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <img :src="data.image" class="mt-3 img-fluid rounded-circle" alt="..." style="max-width: 80%;">
                    </div>
                    <div class="col-8">
                        <div class="text-left">
                            <h4 class="mb-4"><b>Nombre:</b> {{data.name}}</h4>
                            <h4 class="mb-4"><b>Estatus:</b> {{data.status}}</h4>
                            <h4 class="mb-4"><b>Especie:</b> {{data.species}}</h4>
                            <h4 class="mb-4"><b>Tipo:</b> {{data.type}}</h4>
                            <h4 class="mb-4"><b>Genero:</b> {{data.gender}}</h4>
                            <!-- {{data}} -->
                            <div class="float-right">
                                <router-link to="/"> Regresar a la busqueda</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    created(){
        console.log(this.data);
    }
}
</script>

<style>

</style>