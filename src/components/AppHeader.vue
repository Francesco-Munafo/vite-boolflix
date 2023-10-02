<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',

    data(){
        return{
            store
        }
    }
}
</script>

<template>
 <header>
    <div class="d-flex justify-content-between pt-3 p-5">
      <h1 class="glitch" data-text="‎ NET">BOOLFLIX</h1>
      <div class="input-group mb-3 w-25">
        <input @keyup.enter="store.fetchDataMovie(); store.fetchDataSeries(); store.fetchMovieCast()" type="text" class="form-control" placeholder="Type a movie title" aria-describedby="button-addon2"
          v-model="store.query">
        <button class="btn btn-secondary" type="button" id="button-addon2"
          @click="store.fetchDataMovie(); store.fetchDataSeries()">Search</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
