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
    flagGen(url, foo) {
      return url + foo + '/flat/24.png'
    },

    posterGen(baseUrl, backdropPath) {
      const width = 'w342';
      return baseUrl + width + backdropPath
    },
    voteGen(vote){
      const fixedVote = Math.ceil(vote / 2);


      return fixedVote

    }
  }


  //TO ADD MISSING IMAGE REPLACEMENT AND FONT AWESOME FOR STAR RATING

}

</script>

<template>
  <div class="container pt-5">

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Inserisci il titolo di un film"
        aria-describedby="button-addon2" v-model="store.query">
      <button class="btn btn-secondary" type="button" id="button-addon2"
        @click="store.fetchDataMovie(); store.fetchDataSeries()">Cerca</button>
    </div>

    <h1 class="text-light">MOVIES</h1>
    <div class="row row-cols-5 g-3 justify-content-around">

      <div class="col" v-for="movie in store.movieResults">
        <div class="card h-100">
          <img class="img-fluid h-100" :src="posterGen(store.posterBaseUrl, movie.poster_path)" alt="">
          <div class="card-body">
            <ul class="list-group list-group-flush list-unstyled text-light">
              <li class="fw-bold">Titolo: <span class="fw-light">{{ movie.title }}</span></li>
              <li class="fw-bold">Titolo originale: <span class="fw-light">{{ movie.original_title }}</span></li>
              <li class="fw-bold">Lingua originale: <img
                  :src="flagGen(store.flagBaseUrl, langConverter[movie.original_language].toUpperCase())" alt=""></li>
              <li class="fw-bold">Voto: <span class="fw-light" v-for="n in this.voteGen(movie.vote_average)">*</span></li>
            </ul>
            <p class="card-text"></p>
          </div>
        </div>
      </div>

    </div>

    <h1 class="text-light">SERIES</h1>
    <div class="row row-cols-5 g-3 justify-content-around">

      <div class="col" v-for="series in store.tvResults">
        <div class="card h-100">
          <img class="img-fluid h-100" :src="posterGen(store.posterBaseUrl, series.poster_path)" alt="">
          <div class="card-body">
            <ul class="list-group list-group-flush list-unstyled text-light">
              <li class="fw-bold">Titolo: <span class="fw-light">{{ series.name }}</span></li>
              <li class="fw-bold">Titolo originale: <span class="fw-light">{{ series.original_name }}</span></li>
              <li class="fw-bold">Lingua originale: <img
                  :src="flagGen(store.flagBaseUrl, langConverter[series.original_language].toUpperCase())" alt=""></li>
              <li class="fw-bold">Voto: <span class="fw-light" v-for="n in this.voteGen(series.vote_average)">*</span></li>
            </ul>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>


    <!-- <div>
      <h1>SERIES</h1>
      <hr>
      <ul class="series_info list-unstyled" v-for="series in store.tvResults">
        <li class="fw-bold">Titolo: <span class="fw-light">{{ series.name }}</span></li>
        <li class="fw-bold">Titolo originale: <span class="fw-light">{{ series.original_name }}</span></li>
        <li class="fw-bold">Lingua originale: <img
            :src="flagGen(store.flagBaseUrl, langConverter[series.original_language].toUpperCase())" alt=""></li>
        <li class="fw-bold">Voto: <span class="fw-light">{{ series.vote_average }}</span></li>
        <hr>
      </ul>
    </div> -->


  </div>
</template>

<style></style>
