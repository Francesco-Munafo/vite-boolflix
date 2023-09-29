<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {

  name: 'App',


  data() {

    return {

      store,

    }
  },
  components:{
    AppHeader,
    AppMain
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
  
<AppHeader></AppHeader>
<AppMain></AppMain>

</template>

<style></style>
