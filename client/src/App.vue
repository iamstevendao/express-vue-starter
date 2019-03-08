<template lang="pug">
#app
  Header
  router-view
  Footer
</template>

<script>
import Footer from './components/partials/Footer.vue';
import Header from './components/partials/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
