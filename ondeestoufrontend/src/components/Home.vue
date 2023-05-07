<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/iconeLocalizacao.png" id="iconeHome">
        <h1>ONDE ESTOU?</h1>
        <small> ------------------------ </small>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    mounted() {
    this.redirecionarAposTempo('/login', 6000) // Redireciona para '/rota-destino' após 3 segundos (3000ms)
    },
    methods: {
    redirecionarAposTempo(rota, tempo) {
      setTimeout(() => {
        this.$router.push(rota)
      }, tempo)
    }
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 30px;
  }
  h1{
    color:#828282;
    margin-top: 20px;

  }
#iconeHome{
    width: 182px;
    height: 217px;

    margin-top: 106px;
}

small{
  font-size: 25px;
  color: #479EC3;
  position: absolute;
  bottom: 2%;
  left: 25%;
}
</style>
  