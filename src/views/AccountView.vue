<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>

        <h1>Account Settings TODO</h1>

</template>
