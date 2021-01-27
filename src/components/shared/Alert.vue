<template>
    <b-alert :show="alertStore.status" :variant="alertStore.typeAlert">
        <ul v-for="e in alertStore.errors">
            <li>{{e}}</li>
        </ul>
    </b-alert>
</template>
<script>
    export default {
        computed:{
            alertStore(){
                 return this.$store.getters.getAlert
            }
        },
    }
</script>