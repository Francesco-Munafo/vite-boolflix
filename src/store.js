import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    movieResults: [],
    tvResults: [],
    moviesID:[],
    tvID:[],
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
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    api_key: '4b353b432307462fb64faa6c35915b3f', //This is a personal API key, if you want to use this code be sure to replace it with your key
                    query: this.query
                }
            })
            .then(response => {

                if (this.query != null && this.query.trim() != ''){
                   this.movieResults = response.data.results;
                   this.moviesID = response.data.results[0].id;
                //console.log('FILMS' + this.movieResults);
                console.log('MOVIES' + this.moviesID);
                
                }
                

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

                if (this.query != null && this.query.trim() != ''){
                  this.tvResults = response.data.results;
                  this.tvID = response.data.results[0].id;
                  console.log('SERIES ID' + this.tvID);
                //console.log('SERIES' + this.tvResults);
                }
                
            })
    },





})