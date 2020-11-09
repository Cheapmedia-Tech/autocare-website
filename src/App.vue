<template>
  <div id="app" class="bg-autocare-bg">
    <Header />
    <Learn />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Home from "./components/Home.vue";
// import About from "./components/About.vue";
// import Contacts from "./components/Contacts.vue";
import Learn from "./components/Learn.vue";


export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Home,
    // About,
    Learn,
  },
};
</script>

<style src="./assets/css/tailwind.css">
</style>
