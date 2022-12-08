<script>
import axios from "axios";

import ContentApi from "../components/ContentApi.vue";

export default {
  components: { ContentApi },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=778bc670bd5155f53f520d2be146a8fb&language=pt-br&page=1"
    );
    this.filmes = data.results;
  },
};
</script>
<template>
  <div class="fundo">
    <router-link class="fundoRouter" to="/">
      <h3>METFLIX</h3>
    </router-link>
  </div>
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

.fundo {
  background-color: rgb(110, 110, 110);
  padding: 3%;
  margin-right: 22%;
  margin-left: 22%;
  border-radius: 24px;
  box-shadow: 0 0 24px rgb(0, 0, 0);
  margin-top: 2%;
  margin-bottom: 2%;
  
}
h3 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 5.5rem;
  color: rgb(199, 197, 197);
}
.fundoRouter{
  color: aliceblue;
  text-decoration: none;
}
h3:hover{
  color: black;
}
@media (max-width: 700px)
{
  h3{
    font-size: 2.0rem;
  }
}
</style>
