<script setup>
import HeaderApi from './components/HeaderApi.vue';
import { RouterView } from 'vue-router'
import PezaoApi from './components/PezaoApi.vue'
</script>

<template>
<HeaderApi></HeaderApi>
<RouterView></RouterView>
<PezaoApi></PezaoApi>

</template>

<style>
body {
    display: center;
    justify-content: center; 
}

</style>
