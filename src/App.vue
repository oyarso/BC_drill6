<template>
  <div id="app">
    <NavBar>
      <router-link to="/">Home</router-link> |
    </NavBar>
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  }

};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
