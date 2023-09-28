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
      <button class="btn btn-primary" type="button" id="button-addon2" @click="store.fetchDataMovie(); store.fetchDataSeries()">Cerca</button>
    </div>
    <div>
      <h1>MOVIES</h1>
      <hr>
      <ul class="movie_info list-unstyled" v-for="movie in store.movieResults">
        <li class="fw-bold">Titolo: <span class="fw-light">{{ movie.title }}</span></li>
        <li class="fw-bold">Titolo originale: <span class="fw-light">{{ movie.original_title }}</span></li>
        <li class="fw-bold">Lingua originale: <img :src="flagGen(store.flagBaseUrl, langConverter[movie.original_language].toUpperCase())" alt=""></li>
        <li class="fw-bold">Voto: <span class="fw-light">{{ movie.vote_average }}</span></li>
        <hr>
      </ul>
    </div>
    <div>
      <h1>SERIES</h1>
      <hr>
      <ul class="series_info list-unstyled" v-for="series in store.tvResults">
      <li class="fw-bold">Titolo: <span class="fw-light">{{ series.name }}</span></li>
      <li class="fw-bold">Titolo originale: <span class="fw-light">{{ series.original_name }}</span></li>
      <li class="fw-bold">Lingua originale: <img :src="flagGen(store.flagBaseUrl, langConverter[series.original_language].toUpperCase())" alt=""></li>
      <li class="fw-bold">Voto: <span class="fw-light">{{ series.vote_average }}</span></li>
      <hr>
      </ul>
    </div>


  </div>
</template>

<style></style>
