<script>
import { store } from './store.js'

export default {

  name: 'App',
  //emits:['add-query'],

  data() {

    return {

      store


    }
  },
  methods: {
    addQuery() {
      console.log(store.request.params.query);
      console.log(store.request);
    }
  }
}

</script>

<template>
  <div class="container mt-5">

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Inserisci il titolo di un film"
        aria-describedby="button-addon2" v-model="store.request.params.query">
      <button class="btn btn-primary" type="button" id="button-addon2" @click="store.fetchDataMovie()">Cerca</button>
    </div>
    <div>
      <h1>FILM</h1>
      <ul class="info list-unstyled" v-for="film in store.results">
        <li class="fw-bold">Titolo: <span class="fw-light">{{ film.title }}</span></li>
        <li class="fw-bold">Titolo originale: <span class="fw-light">{{ film.original_title }}</span></li>
        <li class="fw-bold">Lingua originale: <span class="fw-light">{{ film.original_language }}</span></li>
        <li class="fw-bold">Voto: <span class="fw-light">{{ film.vote_average }}</span></li>
      </ul>
    </div>

  </div>
</template>

<style></style>
