<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

//usersStore.getAll();
</script>

<template>
    <div>
        <h1>Hi You've Logged In!</h1>

        <h3>TODO Show Promo Ads:</h3>

    </div>
</template>
