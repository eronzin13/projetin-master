<script setup>
import ContentApi from "../components/ContentApi.vue";
</script>

<template>
  <h3>Metaview</h3>
  <div class="input-group">
    <input
      type="search"
      style="max-width: 600px"
      class="form-control rounded"
      placeholder="Procure aqui seu filme"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <button type="button" class="btn btn-primary">Clique aqui</button>
  </div>
  <div class="container">
    <ContentApi></ContentApi>
    <ContentApi></ContentApi>
    <ContentApi></ContentApi>
    <ContentApi></ContentApi>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
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
}
</style>
