<script>
import axios from "axios";
export default {
  data() {
    return {
      filme: "",
      genres: [],
      
      classificacao: {},
    };
  },
  methods: {
    async filmes() {
      const url = `https://api.themoviedb.org/3/movie/${this.filme}`;
      const res = await axios.get(url);
      this.genres = res.data;
      this.classificacao = res.data;
    },
  },
};
</script>
<template>
  <div class="card" style="margin: 5px; width: 18rem">
    <img
      src="../assets/download.png"
      style="width: 275px"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Crocs</h5>
      <p class="card-text">um crocs mano</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        class="bg-success btn btn-primary"
        >crocs</a
      >
    </div>
  </div>
</template>
<style scoped>
.card {
  box-shadow: 1px 1px 6px 1px rgba(0, 104, 37, 0.582);
}
</style>
