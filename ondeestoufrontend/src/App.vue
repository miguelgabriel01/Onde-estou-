<script setup>
  import { ref, onMounted } from 'vue'
  /* 
  Composition API é uma evolução da Options API e oferece mais flexibilidade, 
  modularidade e controle sobre a lógica do componente.
  Embora a Options API ainda seja amplamente suportada e seja uma opção válida, 
  a Composition API é recomendada para novos projetos e pode trazer benefícios 
  significativos para a organização e a manutenção do código.

  Veja o resumo aqui https://docs.google.com/document/d/1ABheqNifizTqMEt3XMDVx9hsgfUtSQX0QbTpF2LUics/edit?usp=sharing
  recomendo que estudem essa foma moderna de trabalhar com o vue.
  */

  onMounted(() => {
    console.log('Hello, World');
  })
</script>

<template>
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>