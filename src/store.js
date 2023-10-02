import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    movieResults: [],
    tvResults: [],
    moviesID: [],
    tvID: [],
    movieCast: [],
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
                //Clear the array so it'll always be empty after a request
                this.moviesID = [];
                //This condition controls user's input and then gives the results
                if (this.query != null && this.query.trim() != '') {
                    this.movieResults = response.data.results;
                    
                    //This cycle gets all movies IDs from the search results
                    for (let i = 0; i < this.movieResults.length; i++) {
                        this.moviesID.push(this.movieResults[i].id);
                    }
                }
                console.log(this.moviesID);


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
                //Clear the array so it'll always be empty after a request
                this.tvID = [];
                //This condition controls user's input and then gives the results
                if (this.query != null && this.query.trim() != '') {
                    this.tvResults = response.data.results;

                    //This cycle gets all series IDs from the search results
                    for (let i = 0; i < this.tvResults.length; i++) {
                        this.tvID.push(this.tvResults[i].id);
                    }
                    console.log(this.tvID);
                    //console.log('SERIES' + this.tvResults);
                }

            })
    },
    fetchMovieCast() {
        for (let i = 0; i < moviesID.length; i++) {
            console.log(this.moviesID[i]);
        }
    }





})