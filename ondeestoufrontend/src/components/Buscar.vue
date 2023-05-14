<template>
    <div class="buscar">
      <img src="../assets/iconeLocalizacao.png" alt="">
      <div class="encontrar">
        <h1>Locais</h1>
    
        <div class="formulario">
          <form @submit="submitForm">
            <select name="localDeSaida" v-model="localDeSaida">
                <option value="">Atual</option>
                <option value="Biblioteca">Biblioteca</option>
                <option value="Cradt">Cradt</option>
                <option value="SalaDosProfessores">Sala dos professores</option>
                <option value="LabF1">Lab F1</option>
                <option value="LabF2">Lab F2</option>
                <option value="LabF3">Lab F3</option>
                <option value="LabF4">Lab F4</option>
                <option value="SalaB22">Sala B22</option>
                <option value="SalaB26">Sala B26</option>
                <option value="SalaB38">Sala B38</option>
                <option value="SalaB17">Sala B17</option>
                <option value="SalaB23">Sala B23</option>
                <option value="SalaB20">Sala B20</option>
                <option value="SalaB19">Sala B19</option>
                <option value="Auditorio">Auditorio</option>
                <option value="BanheiroM">Banheiro M</option>
                <option value="BanheiroF">Banheiro F</option>
                <option value="Refeitorio">Refeitorio</option>
            </select>
            <select name="localDeDestino" v-model="localDeDestino">
                <option value="">Destino</option>
                <option value="Biblioteca">Biblioteca</option>
                <option value="Cradt">Cradt</option>
                <option value="SalaDosProfessores">Sala dos professores</option>
                <option value="LabF1">Lab F1</option>
                <option value="LabF2">Lab F2</option>
                <option value="LabF3">Lab F3</option>
                <option value="LabF4">Lab F4</option>
                <option value="SalaB22">Sala B22</option>
                <option value="SalaB26">Sala B26</option>
                <option value="SalaB38">Sala B38</option>
                <option value="SalaB17">Sala B17</option>
                <option value="SalaB23">Sala B23</option>
                <option value="SalaB20">Sala B20</option>
                <option value="SalaB19">Sala B19</option>
                <option value="Auditorio">Auditorio</option>
                <option value="BanheiroM">Banheiro M</option>
                <option value="BanheiroF">Banheiro F</option>
                <option value="Refeitorio">Refeitorio</option>
            </select>
            <button>Encontrar</button>
        </form>
        </div>
      </div>
      
      <small> ------------------------ </small>
    </div>
  </template>
  
  <script>
  import { router } from '../router';
  export default {
    name: "Buscar", 
    data() {
        return {
            localDeSaida: "",
            localDeDestino: "",
            submitted: false
        }
    },
    methods: {
        submitForm(event){
            event.preventDefault();
            this.submitted = true

            console.log("Estou saindo d: " + this.localDeSaida)
            console.log("Estou chegando em: " + this.localDeDestino)

            // Salvar os valores no localStorage
            localStorage.setItem("localDeSaida", this.localDeSaida)
            localStorage.setItem("localDeDestino", this.localDeDestino)

            console.log("valor localStorage: " + localStorage.getItem("localDeSaida"))

             // Redirecionar para a rota Mapa
             this.$router.push("/mapa")
        }
    },
  }
  </script>
  
  <style scoped>
  .buscar{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  
  img{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .encontrar{
    margin-top: 200px;
  }
  
  h1{
    color: #828282;
    margin-left: -210px;
    padding: 10px;
  }
  
  .formulario{
    width: 100%;
    height: 200px;  
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-around;
  }
  
  form{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 200px;
  }
  
  select{
    width: 300px;
    height: 60px;
    background-color: #EFEFEF;
    border-radius: 7px;
    outline: navajowhite;
    border: none;
    color: #828282;
    font-size: 16px;
    padding: 10px;
  }
  
  button{
    width: 300px;
    height: 60px;
    background: #479EC3;
    color: white;
    font-size: 19px;
    border-radius: 7px;
    border: none;
  }
  
  a{
    text-decoration: none;
    color: #479EC3;
    font-size: 15px;
    margin-top: 15px;
  }
  
  small{
    font-size: 25px;
    color: #479EC3;
    position: absolute;
    bottom: 2%;
    left: 25%;
  }
  </style>