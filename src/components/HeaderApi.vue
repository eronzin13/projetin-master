<template>
  <div class="borda">
  <nav class="navbar navbar-expand-lg text-white navbar-white bg-dark">
    <div class="navbar">
      <a id="coisaboa" class="navbar-brand text-white" href="/">METFLIX</a>
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
              class="nav-link active text-white"
              aria-current="page"
              href="/novidades"
              >Novidades</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="">Series</a>
          </li>
          <li class="nav-item"></li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sobre
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/about">Sobre</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
</template>
<style scoped>
#coisaboa {
  border-radius: 10px;
  background-color: rgb(63, 63, 63);
  font-size: 145%;
}
.borda {
  box-shadow: 0 0 24px rgb(0, 0, 0);
}
</style>
