<script>
import axios from 'axios'

import ContentApi from '../components/ContentApi.vue';

export default {
  components: { ContentApi },
  data() {
    return {
      filmes: []
    }
  },
  async created() {
    const {data} = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=778bc670bd5155f53f520d2be146a8fb&language=pt-br&page=1") 
    this.filmes = data.results
  }
}
</script>
<template>
    
  <div class="container">
    <ContentApi v-for="filme of filmes" :key="filme.id" :filme="filme" />
  </div>
</template>
<style>
    .container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 30px;
  margin-top: -30px;

}
</style>