<template>
  <div id="app" class="bg-autocare-bg">
    <Header />
    <SingleLearn />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Home from "./components/Home.vue";
// import About from "./components/About.vue";
// import Contacts from "./components/Contacts.vue";
// import Learn from "./components/Learn.vue";
import SingleLearn from "./components/SingleLearn.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Home,
    // About,
    // Contacts,
    // Learn,
    SingleLearn,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>
<style src="./assets/css/fonts.css">
</style>
