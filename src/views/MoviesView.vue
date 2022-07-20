<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore,  useMoviesStore} from '@/stores';


const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

const moviesStore = useMoviesStore();
const { movies } = storeToRefs(moviesStore);

moviesStore.getMovies();
</script>

<template>
    <div>
        <h1>Here is a list of All movies</h1>
        <p>We will add search and recommendations later2</p>
        <ul v-if="movies.length" class="list-group" style="max-width:800px">
            <li v-for="movie in movies" :key="movie.id" class="list-group-item">
            <div class="flex-container">
                 <div class="flex-child"> <img style="max-width:60px;" v-bind:src="movie.imageUrl" /> </div>
                   <div class="flex-child"> {{movie.title}} </div> <div class="flex-child-right">
                    <button type="button" class="btn btn-primary"> Rent</button></div>
            </div>
            <div style="font-size:smaller">
                   {{movie.description}}
            </div>
            
            </li>
        </ul>
    </div>
</template>
