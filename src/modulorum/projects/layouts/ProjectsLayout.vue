<template>

    <SupraMenu></SupraMenu>

<main>
    <LateralisMenu/>

    <router-view></router-view>

</main>

</template>

<script lang="ts" setup>
import SupraMenu from '@/modulorum/commune/components/SupraMenu.vue';
import LateralisMenu from '../components/LateralisMenu.vue';


</script>