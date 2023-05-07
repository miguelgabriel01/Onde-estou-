<template>
    <div class="mapa">
      <img id="iconeheader" src="../assets/iconeLocalizacao.png" alt="icone de Geolocalização">
      <div class="favoritos">
        <h1>Mapa</h1>
        <div class="mapaCampus">
            <h3>Latitude: {{longitude}}</h3>
            <h3>Longitude: {{latitude}}</h3>

            <img src="../assets/mapa.jpeg" alt="mapa de localização" class="mapaImg">
            <router-link to="/favoritos"><button>Voltar</button></router-link>
        </div>
      </div>
      <small> ------------------------ </small>
    </div>
  </template>
  
  <script>
  export default {
    name: "Mapa",
    data(){
      return{
        longitude: null,
        latitude: null
      }
    },

    methods: {
  atualizarLocalizacao(position) {
    this.longitude = position.coords.longitude;
    this.latitude = position.coords.latitude;
  },
  localizacao() {
    if ('geolocation' in navigator) {
      const watcher = navigator.geolocation.watchPosition((position) => {
        this.atualizarLocalizacao(position);
      });
    } else {
      alert("Não foi possível obter a geolocalização atual..");
    }
  }
},
    created() {
       this.localizacao();
    },
  }
  </script>
  
  <style scoped>
  .mapa{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  
  #iconeheader{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .favoritos{
    margin-top: 90px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .mapaImg{
    width: 400px;
    height: 400px;
  }
  
  h1{
    color: #828282;
    padding: 40px;
    margin-left: -6%;
  }

  h3{
    color: #828282;
  }
  
  .mapaCampus{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  button{
    width: 250px;
    height: 60px;
    background: #479EC3;
    color: white;
    font-size: 19px;
    border-radius: 7px;
    border: none;
  }

  small{
    font-size: 25px;
    color: #479EC3;
    position: absolute;
    bottom: 2%;
    left: 25%;
  }
  </style>