<template>
  <div id="app" class="bg-autocare-bg">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'My AutoCare';
      }
    },
  }
};
</script>



<style src="./assets/css/tailwind.css"></style>
<style src="./assets/css/fonts.css"></style>
