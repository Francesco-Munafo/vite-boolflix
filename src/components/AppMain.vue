<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
import CardList from './CardList.vue'
export default {
    name: 'AppMain',

    data() {
        return {
            store
        }
    },
    components: {
        CardList
    }
}
</script>
<template>
    <main>
        <div class="container py-5">
            <CardList></CardList>
        </div>
    </main>
</template>
