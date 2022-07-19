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
        <p>We will add search and recommendations later</p>
    </div>
</template>
