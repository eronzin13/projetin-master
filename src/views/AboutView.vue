<template>
  <div class="container-fluid">
    <div class="col-12 text-center">
      <p>Sua review online rapida</p>
      <h1>Metflix</h1>
      <p>Criado por Eron Tiago</p>
      <h5>Usando:</h5>{
      path: '/',
      name: 'home',
      component: HomeView
    },
    
      <p class="vue"><img src="@/assets/vuejs-ar21.png" /></p>
    </div>
  </div>
  <div class="container mt-5">
    <div class="sobre">
      <div class="col-sm-4">
        <h3>Objetivo</h3>
        <p>Fazer um site usando APIs online</p>
        <p></p>
      </div>
      <div class="col-sm-4">
        <h3>Resultado esperado</h3>
        <p>Ter um site bonito e objetivo</p>
        <p>
          Voce vai ser capaz de achar as notas dos filmes avaliados pelo imbd.
        </p>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  margin-bottom: 75px;
} 
.col-12 {
  margin-top: 50px;
}
.col-12 h1 {
  font-size: 50px;
}
img {
  height: 300px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.sobre {
display: flex;
justify-content: center;
padding: 24px;
margin-bottom: 5%;

}
.col-sm-4 {
  margin-left: 17%;
}
vue:hover{
  color: black;
}
@media (max-width: 900px)
{
  h3{
    font-size: 2.0rem;
  }
}
</style>
