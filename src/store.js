import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    results:[],
    movieTitle: '',
    originalTitle:'',
    lang:'',
    flagBaseUrl: 'https://flagsapi.com/',
    valutation:'',


    request:{
        method: 'GET',
        url:'https://api.themoviedb.org/3/search/movie',
        params:{
            api_key: '4b353b432307462fb64faa6c35915b3f', //This is a personal API key, if you want to use this code be sure to replace it with your key
            query: ''   
        }
    },

    

fetchDataMovie(){
    axios
    .request(this.request)
    .then(response => {
        
        console.log(this.request.params.query);
        console.log(response.data);
        console.log(response.data.results[0].original_language);
        this.results = response.data.results;
        console.log(response);
        

    })
    .catch(error => {
        console.error(error);
    })
},


    
})