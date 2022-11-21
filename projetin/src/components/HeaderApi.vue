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
  <nav class="navbar navbar-expand-lg text-white navbar-white bg-dark">
    <div class="container-fluid text-white">
      <a id="coisaboa" class="navbar-brand text-white" href="/">Metaview</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link text-white"
              href="https://www.youtube.com/watch?v=3X-iqFRGqbc&ab_channel=swizzdizzy"
              >???</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active text-white"
              aria-current="page"
              href="/about"
              >Sobre o site</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/critica">Reviews</a></li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.youtube.com/watch?v=3X-iqFRGqbc&ab_channel=swizzdizzy"
                  >Literalmente um rato girando</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/about">Sobre</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#coisaboa {
  border-radius: 10px;
}
</style>
