import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email, password) {
            let userTypeId=2;
    
            const authObj = await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password, userTypeId});
            console.log("Token=" + authObj.access_token);
            // update pinia state
            // store user details and jwt in local storage to keep user logged in between page refreshes
            var user = {"token": authObj.access_token}; 
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
