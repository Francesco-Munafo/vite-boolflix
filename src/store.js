import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    movieResults: [],
    tvResults: [],
    movieCast: [],
    genres:[],
    selectedGenre: '',
    movieTitle: '',
    originalTitle: '',
    query: null,
    lang: '',
    flagBaseUrl: 'https://flagsapi.com/',
    posterBaseUrl: 'https://image.tmdb.org/t/p/',
    valutation: '',
    api_key: '4b353b432307462fb64faa6c35915b3f', //This is a personal API key, if you want to use this code be sure to replace it with your key




    fetchDataMovie() {
        axios
            .request({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    api_key: this.api_key,
                    query: this.query
                }
            })
            .then(response => {


                //This condition controls user's input and then gives the results
                if (this.query != null && this.query.trim() != '') {
                    this.movieResults = response.data.results;


                    //This cycle gets all movies IDs from the search results
                    this.movieResults.forEach(movie => {
                        axios
                            .request({
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
                                params: {
                                    api_key: this.api_key
                                }
                            })
                            .then(movieCredit => {
                                movie.cast = movieCredit.data.cast;
                            })
                        axios
                            .request({
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/movie/${movie.id}`,
                                params: {
                                    api_key: this.api_key
                                }
                            })
                            .then(movieGenres => {
                                movie.genres = movieGenres.data.genres;
                            })
                    });



                }
                console.log(this.movieResults);


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
                    api_key: this.api_key,
                    query: this.query
                }
            })
            .then(response => {

                //This condition controls user's input and then gives the results
                if (this.query != null && this.query.trim() != '') {
                    this.tvResults = response.data.results;

                    //This cycle gets all series IDs from the search results
                    this.tvResults.forEach(series => {
                        axios
                            .request({
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/tv/${series.id}/credits`,
                                params: {
                                    api_key: this.api_key,
                                }
                            })
                            .then(seriesCredit => {
                                series.cast = seriesCredit.data.cast;
                            })
                        axios
                            .request({
                                method: 'GET',
                                url: `https://api.themoviedb.org/3/tv/${series.id}`,
                                params: {
                                    api_key: this.api_key
                                }
                            })
                            .then(seriesGenres => {
                                series.genres = seriesGenres.data.genres;
                            })
                    });

                }
                //console.log(this.tvResults);
            })
    },

    fetchGenres(){
        axios
        .request({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            params: {
                api_key: this.api_key
            }
        })
        .then(genresResp => {
            //console.log(genresResp.data.genres);
            this.genres = genresResp.data.genres
            
        })
    },

    

    movieGenreFilter() {
        this.movieResults = this.movieResults.filter(movie => {
            //console.log(movie);
            console.log(movie.genre_ids.includes(this.selectedGenre));
             return movie.genre_ids.includes(this.selectedGenre)
        })
        
    },

    seriesGenreFilter() {
        this.movieResults = this.movieResults.filter(movie => {
            //console.log(movie);
            console.log(movie.genre_ids.includes(this.selectedGenre));
             return movie.genre_ids.includes(this.selectedGenre)
        })
        
    }


})