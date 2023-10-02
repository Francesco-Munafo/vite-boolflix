<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
export default {
    name: 'CardList',

    data() {
        return {
            store
        }
    },

    components: {
        AppCard
    },
    methods:
    {
        
    }
}
</script>
<template>
    <h3 class="w-100 glitch text-center pb-5" v-if="store.movieResults.length > 0">MOVIES</h3>
    <div class="row row-cols-5 g-3 justify-content-around">
        <AppCard :content="movie" v-for="movie in store.movieResults"></AppCard>
        <h3 class="w-100 glitch text-center py-5" v-if="store.tvResults.length > 0">SERIES</h3>
        <AppCard :content="series" v-for="series in store.tvResults"></AppCard>
    </div>
</template>



<style lang="scss" scoped></style>