import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useMoviesStore = defineStore({
    id: 'movies',
    state: () => ({
        // initialize state from local storage to get all the movies list - not sure if we need to store this, or possibly just store current page
        movies: JSON.parse(localStorage.getItem('movies')),
        returnUrl: null
    }),
    actions: {
        async getMovies() {
            const movies = await fetchWrapper.get(`${baseUrl}/movie`);

            // update pinia state
            this.movies = movies;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('movies', JSON.stringify(movies));

        }
        //TODO possibly admin function to add movies
    }
});
