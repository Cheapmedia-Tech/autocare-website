<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: Header,
  Footer,
  Home
};
</script>

<template>
  <div id="app" class="bg-autocare-bg">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style src="./assets/css/tailwind.css"></style>
<style src="./assets/css/fonts.css"></style>
