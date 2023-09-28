<script>
import { store } from './store.js'
import { langConverter } from './langConverter.js'


export default {

  name: 'App',


  data() {

    return {

      store,
      langConverter

    }
  },
  methods: {
    flagGen(url, foo){
      return url + foo + '/flat/24.png'
    }
  }
}

</script>

<template>
  <div class="container mt-5">

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Inserisci il titolo di un film"
        aria-describedby="button-addon2" v-model="store.query">
      <button class="btn btn-primary" type="button" id="button-addon2" @click="store.fetchDataMovie()">Cerca</button>
    </div>
    <div>
      <h1>FILM</h1>
      <ul class="info list-unstyled" v-for="movie in store.movieResults">
        <li class="fw-bold">Titolo: <span class="fw-light">{{ movie.title }}</span></li>
        <li class="fw-bold">Titolo originale: <span class="fw-light">{{ movie.original_title }}</span></li>
        <li class="fw-bold">Lingua originale: <img :src="flagGen(store.flagBaseUrl, langConverter[movie.original_language].toUpperCase())" alt=""></li>
        <li class="fw-bold">Voto: <span class="fw-light">{{ movie.vote_average }}</span></li>
        <hr>
      </ul>
    </div>


  </div>
</template>

<style></style>
