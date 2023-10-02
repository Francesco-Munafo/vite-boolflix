import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    movieResults: [],
    tvResults: [],
    moviesID: [],
    tvID: [],
    movieCast:[],
    movieTitle: '',
    originalTitle: '',
    query: null,
    lang: '',
    flagBaseUrl: 'https://flagsapi.com/',
    posterBaseUrl: 'https://image.tmdb.org/t/p/',
    valutation: '',




    fetchDataMovie() {
        axios
            .request({
                method: 'GET',
                url: '',
                params: {
                    api_key: '4b353b432307462fb64faa6c35915b3f', //This is a personal API key, if you want to use this code be sure to replace it with your key
                    query: this.query
                }
            })
            .then(response => {
                //This condition controls user's input and then gives the results
                if (this.query != null && this.query.trim() != '') {
                    this.movieResults = response.data.results;
                }
                //This cycle gets all movies IDs from the search results
                for (let i = 0; i < this.movieResults.length; i++) {
                    this.moviesID.push(this.movieResults[i].id);
                }
                console.log(this.moviesID);
                for (let i = 0; i < this.moviesID.length; i++) {
                    axios
                    .get(`https://api.themoviedb.org/3/search/movie/${this.moviesID[i]}/credits?api_key=4b353b432307462fb64faa6c35915b3f`)
                    .then(response =>{
                        this.movieCast = response.data.cast
                        console.log(this.movieCast);
                    })

                    
                }
                axios
                .request({
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/movie/45790/credits?api_key=${this.api_key}`
                })

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchDataSeries() {
        axios
            .request({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/tv',
                params: {
                    api_key: '4b353b432307462fb64faa6c35915b3f',
                    query: this.query
                }
            })
            .then(response => {

                if (this.query != null && this.query.trim() != '') {
                    this.tvResults = response.data.results;
                    this.tvID = response.data.results[0].id;
                    console.log('SERIES ID' + this.tvID);
                    //console.log('SERIES' + this.tvResults);
                }

            })
    },





})