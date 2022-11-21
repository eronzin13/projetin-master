<script>

export default {
  props: ['filme'],
  methods: {
    getImage(path) {
      return `https://image.tmdb.org/t/p/w500${path}`
    }
  }
}
</script>

<template>
    <div class="card" style="margin: 5px; width: 18rem;">
  <img :src="getImage(filme.poster_path)" style=" width: 275px;" class="img" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ filme.title }}</h5>
    <p class="card-text">{{ filme.release_date }}</p>
   
  </div>
</div>
</template>
<style scoped>
.card{
  box-shadow: 1px 1px 6px 1px #000;
  background-color: rgb(177, 177, 177);
}
.img{
  background-color: #000;
  margin-top: 2%;
  margin-left: 2%;
}
</style>
