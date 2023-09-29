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
    flagGen(url, lang) {
      return url + lang + '/flat/24.png'
    },

    posterGen(baseUrl, backdropPath) {
      const width = 'w342';
      return baseUrl + width + backdropPath
    },
    voteGen(vote) {
      const fixedVote = Math.ceil(vote / 2);


      return fixedVote

    }
  }


  //TO ADD MISSING IMAGE REPLACEMENT AND FONT AWESOME FOR STAR RATING

}

</script>

<template>
  <header>
    <div class="d-flex justify-content-between pt-3 p-5">
      <h1 class="glitch" data-text="‎ NET">BOOLFLIX</h1>
      <div class="input-group mb-3 w-25">
        <input type="text" class="form-control" placeholder="Type a movie title" aria-describedby="button-addon2"
          v-model="store.query">
        <button class="btn btn-secondary" type="button" id="button-addon2"
          @click="store.fetchDataMovie(); store.fetchDataSeries()">Search</button>
      </div>
    </div>
  </header>

  <main>

    <div class="container pt-5">
      <h1 class="text-light">MOVIES</h1>
      <div class="row row-cols-5 g-3 justify-content-around">

        <div class="col" v-for="movie in store.movieResults">
          <div class="card h-100 d-flex flex-column justify-content-center">
            <img class="img-fluid h-100" v-if="movie.poster_path != null"
              :src="posterGen(store.posterBaseUrl, movie.poster_path)" alt="">
            <h5 v-else="movie.poster_path == null" class="glitch text-center" data-text="104NOT_FOUND">404NOT_FOUND No preview available</h5>
            <div class="card-body">
              <ul class="list-group list-group-flush list-unstyled text-light">
                <li class="fw-bold">Title:
                  <span class="fw-light">{{ movie.title }}</span>
                </li>
                <li class="fw-bold">Original title:
                  <span class="fw-light">{{ movie.original_title }}</span>
                </li>
                <li class="fw-bold">Original language:
                  <img :src="flagGen(store.flagBaseUrl, langConverter[movie.original_language].toUpperCase())" alt="">
                </li>
                <li class="fw-bold">Rating:
                  <span class="fw-light text-warning" v-for="n in this.voteGen(movie.vote_average)">
                    <font-awesome-icon :icon="['fas', 'star']" />
                  </span>
                  <span class="fw-light" v-for="n in (5 - this.voteGen(movie.vote_average))">
                    <font-awesome-icon :icon="['far', 'star']" />
                  </span>
                </li>
              </ul>
              <p class="card-text"></p>
            </div>
          </div>
        </div>

      </div>

      <h1 class="text-light">SERIES</h1>
      <div class="row row-cols-5 g-3 justify-content-around">

        <div class="col" v-for="series in store.tvResults">
          <div class="card h-100 d-flex flex-column justify-content-center">
            <img class="img-fluid h-100" v-if="series.poster_path != null"
              :src="posterGen(store.posterBaseUrl, series.poster_path)" alt="">
            <h5 v-else="series.poster_path == null" class="glitch text-center" data-text="104NOT_FOUND">404NOT_FOUND No preview available</h5>
            <div class="card-body">
              <ul class="list-group list-group-flush list-unstyled text-light">
                <li class="fw-bold">Titolo:
                  <span class="fw-light">{{ series.name }}</span>
                </li>
                <li class="fw-bold">Titolo originale:
                  <span class="fw-light">{{ series.original_name }}</span>
                </li>
                <li class="fw-bold">Lingua originale:
                  <img :src="flagGen(store.flagBaseUrl, langConverter[series.original_language].toUpperCase())" alt="">
                </li>
                <li class="fw-bold">Voto:
                  <span class="fw-light text-warning" v-for="n in this.voteGen(series.vote_average)">
                    <font-awesome-icon :icon="['fas', 'star']" />
                  </span>
                  <span class="fw-light" v-for="n in (5 - this.voteGen(series.vote_average))">
                    <font-awesome-icon :icon="['far', 'star']" />
                  </span>
                </li>
              </ul>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>



    </div>

  </main>
</template>

<style></style>
