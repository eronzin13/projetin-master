<script >
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
    const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=778bc670bd5155f53f520d2be146a8fb&language=pt-BR&page=1") 
    this.filmes = data.results
  }
}
</script>

<template>
  <div class="fundo">
    <h3>METFLIX</h3>
    <div class="input-group">
      <input
        type="search"
        style="max-width: 600px"
        class="form-control rounded"
        placeholder="Procure aqui seu filme"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" class="btn btn-primary bg-dark">Clique aqui</button>
    </div>
  </div>
  <div class="container">
    <ContentApi v-for="filme of filmes" :key="filme.id" :filme="filme" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 30px;
  margin-top: -30px;

}
.input-group {
  margin-bottom: 65px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  
}
h3 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 500%;
  
}
.fundo {
  background-color: rgb(110, 110, 110);
  padding: 3%;
  margin-right: 22%;
  margin-left: 22%;
  border-radius: 24px;
  box-shadow: 0 0 24px rgb(0, 0, 0);
  
}
</style>
