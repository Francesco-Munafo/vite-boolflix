<script>
import { store } from '../store.js'
export default {
  name: 'AppHeader',
  emits:['selected-genre'],

  data() {
    return {
      store
    }
  },
  created() {
    store.fetchGenres()
  }
}
</script>

<template>
  <header>
    <div class="d-flex justify-content-between pt-3 p-5">
      <h1 class="glitch" data-text="‎ NET">BOOLFLIX</h1>
      <div class="d-flex">
        <select class="form-select h-75 w-75 " id="select" @change="$emit('selected-genre')" v-model="store.selectedGenre">
          <option value="" selected="selected">Choose a genre</option>
          <option v-for="genre in store.genres" :value="genre.id">{{ genre.name }}</option>
        </select>

        <div class="input-group mb-3 ms-4 h-75">
          <input @keyup.enter="store.fetchDataMovie(); store.fetchDataSeries()" type="text" class="form-control"
            placeholder="Type a movie title" aria-describedby="button-addon2" v-model="store.query">
          <button class="btn btn-secondary" type="button" id="button-addon2"
            @click="store.fetchDataMovie(); store.fetchDataSeries()">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
