<template>
    <div class="map">
      <img id="iconeheader" src="../assets/iconeLocalizacao.png" alt="icone de Geolocalização">
      <div class="favorites">
        <h1>Mapa</h1>
        
          <iframe
            ref="mapFrame"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
        </iframe>

        <!-- <img src="../assets/mapa.jpeg" alt="mapa de localização" class="mapaImg"> -->
        <router-link to="/favorites">
          <button type="button"> Voltar </button>
        </router-link>
      </div>
      <small> ------------------------ </small>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue'
  import 'leaflet/dist/leaflet.css'
  
  export default defineComponent({
    name: 'Map',
    setup() {
      const mapFrame = ref(null);

      onMounted(() => {
        const latitude = -7.73273;
        const longitude = -34.94271;
        const zoom = 19;

      const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${calculateBoundingBox(
        latitude,
        longitude,
        zoom
      )}&layer=mapnik`;

      mapFrame.value.src = mapUrl;
    });
    function calculateBoundingBox(latitude, longitude, zoom) {
      const tileSize = 256;
      const scale = 2 ** zoom;
      const centerPixelX = (longitude + 180) * (scale * tileSize / 360);
      const centerPixelY = ((1 - Math.log(Math.tan(latitude * Math.PI / 180) + 1 / Math.cos(latitude * Math.PI / 180)) / Math.PI) / 2) * (scale * tileSize);

      const left = centerPixelX - tileSize / 2;
      const top = centerPixelY - tileSize / 2;
      const right = centerPixelX + tileSize / 2;
      const bottom = centerPixelY + tileSize / 2;

      return `${left},${top},${right},${bottom}`;
    }

      return {
        mapFrame,
      }
    }
  })
  </script>
  
  <style scoped>
  .map{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 60vh;
    height: 60vh;
  }
  .map-container {
    height: 60vh;
  }
  
  #iconeheader{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .favorites{
    margin-top: 90px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .mapImg{
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
  
  .mapCampus{
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