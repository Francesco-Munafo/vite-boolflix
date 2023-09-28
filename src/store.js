import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    movieResults: [],
    tvResults: [],
    movieTitle: '',
    originalTitle: '',
    query: null,
    lang: '',
    flagBaseUrl: 'https://flagsapi.com/',
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
                this.movieResults = response.data.results;

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
                this.tvResults = response.data.results;
            })
    }



})