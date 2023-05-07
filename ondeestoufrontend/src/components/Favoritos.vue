<template>
    <div class="locais">
      <img id="iconeheader" src="../assets/iconeLocalizacao.png" alt="">
      <div class="locaisCampus">
        <h1>Locais</h1>
        <div class="listaLocais">
           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #C7FFAD">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Biblioteca</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #C7FFAD">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Cradt</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #C7FFAD">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Sala dos professores</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #C7FFAD">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Secretaria</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #97F0F0">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Lab F1</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #97F0F0">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Lab F2</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #97F0F0">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Lab F3</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #97F0F0">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Lab F4</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #FC858C">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Sala B22</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #FC858C">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Sala B23</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #FC858C">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Sala B25</h4>
           </div> </router-link>

           <router-link to="/mapa"><div class="icone">
            <div class="iconeSvg" style="background: #FC858C">
                <img src="../assets/iconeLocalizacao.png" alt="" id="iconeImg"/>
            </div>
            <h4 class="iconeNome">Sala B26</h4>
           </div> </router-link>
           <div id="triangulo-para-baixo"></div>

        </div>
      </div>
      <small> ------------------------ </small>
    </div>
  </template>
  
  <script>
  export default {
    name: "Favoritos",
    data(){
      return{
        locais:[
          {
            "nome": "Biblioteca",
            "cor": "#C7FFAD"
          },
          {
            "nome": "Cradt",
            "cor": "#C7FFAD"
          },
          {
            "nome": "Sala dos professores",
            "cor": "#C7FFAD"
          },
          {
            "nome": "Secretaria",
            "cor": "#C7FFAD"
          },
          {
            "nome": "Lab F1",
            "cor": "#97F0F0"
          },
          {
            "nome": "Lab F2",
            "cor": "#97F0F0"
          },
          {
            "nome": "Lab F3",
            "cor": "#97F0F0"
          },
          {
            "nome": "Lab F4",
            "cor": "#97F0F0"
          },
          {
            "nome": "Sala B22",
            "cor": "#FC858C"
          },
          {
            "nome": "Sala B26",
            "cor": "#FC858C"
          },
          {
            "nome": "Sala B17",
            "cor": "#FC858C"
          },
          {
            "nome": "Sala B38",
            "cor": "#FC858C"
          },
      ]
      }
    }
  }
  </script>
  
  <style scoped>
  .locais{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  
  a{
    text-decoration: none;
  }
  
  #iconeheader{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .locaisCampus{
    margin-top: 90px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  
  h1{
    color: #828282;
    padding: 40px;
    margin-left: -6%;
  }
  
  .listaLocais{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .icone{
    width: 95px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .iconeSvg{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;
  }

  #iconeImg{
    width: 45px;
    height: 45px;
  }

  .iconeNome{
    color: #828282;
    padding: 12px;
  }

  #triangulo-para-baixo {
    width: 0; 
    height: 0; 
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 25px solid #2AC0E1;
 
    
  }
  small{
    font-size: 25px;
    color: #479EC3;
    position: absolute;
    bottom: 2%;
    left: 25%;
  }
  </style>