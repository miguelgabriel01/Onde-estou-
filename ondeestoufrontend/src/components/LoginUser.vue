<template>
  <div class="formUser">
    <img src="../assets/iconeLocalizacao.png" alt="">
    <div class="entrar">
      <h1>Entrar</h1>
  
      <div class="formulario">
        <form action="">
          <input type="text" placeholder="Matricula">
          <button>Entrar</button>
      </form>
      <router-link to="/favorites"><a href="#">Acessar como visitante</a></router-link>
      </div>
    </div>
    <small> ------------------------ </small>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'LoginUser',

  setup () {
    // code ...
  }
});
</script>

<style scoped>
.formUser{
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
.entrar{
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
  justify-content: center;
}

form{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 140px;
}

input{
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