<script>
import { store } from '../store.js'
import { langConverter } from '../langConverter.js'
export default {
    name: 'AppCard',
    props: {
        content: Object
    },
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


}
</script>
<template>
    <div class="col">
        <div class="card rounded-1 h-100 d-flex flex-column justify-content-center">
            <img class="img-fluid h-100 rounded-1" v-if="content.poster_path != null"
                :src="posterGen(store.posterBaseUrl, content.poster_path)" alt="">
            <h5 v-else class="glitch text-center" data-text="104">404NOT_FOUND No
                preview available</h5>
            <div class="card-body rounded-1">

                <ul class="list-group list-group-flush list-unstyled text-light">

                    <li class="fw-bold">Title:
                        <span class="fw-light">{{ content.title || content.name }}</span>
                    </li>

                    <li class="fw-bold" v-if="content.title != content.original_title">Original title:
                        <span class="fw-light">{{ content.original_title || content.original_name }}</span>
                    </li>

                    <li class="fw-bold">Original language:
                        <img :src="flagGen(store.flagBaseUrl, langConverter[content.original_language].toUpperCase())"
                            alt="">
                    </li>

                    <li class="fw-bold">Rating:
                        <span class="fw-light text-warning" v-for="n in this.voteGen(content.vote_average)">
                            <font-awesome-icon :icon="['fas', 'star']" />
                        </span>
                        <span class="fw-light" v-for="n in (5 - this.voteGen(content.vote_average))">
                            <font-awesome-icon :icon="['far', 'star']" />
                        </span>
                    </li>
                    <li class="fw-bold">Description:
                        <span v-if="content.overview != ''" class="fw-light">{{ content.overview }}</span>
                        <span v-else class="fw-light">No description available</span>
                    </li>
                    <li class="fw-bold">Actors:
                        <span v-for="cast in content.cast" class="fw-light">{{ `${cast.name}, ` }}</span>
                    </li>
                    <li class="fw-bold">Genres:
                        <span v-for="genres in content.genres" class="fw-light">{{ `${genres.name}, ` }}</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>