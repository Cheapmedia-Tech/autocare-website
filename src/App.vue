<template>
  <div id="app" class="bg-autocare-bg">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "My AutoCare";
      },
    },
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>
<style src="./assets/css/fonts.css"></style>
