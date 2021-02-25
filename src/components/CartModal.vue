<template>
  <div>
    <div
      class="fixed bg-white bottom-auto lg:bottom-auto lg:top-16 max-w-390px min-w-250px right-7 flex flex-col rounded-md border-2 border-nav-text"
    >
      <header
        class="flex p-4 justify-between items-center text-autocare-blue border-b font-semibold ibm-font"
      >
        <slot name="header"> Cart </slot>
        <button type="button" @click="close">
          <img src="../assets/img/close-blue.svg" alt="close" />
        </button>
      </header>
      <section
        class="relative p-6 text-nav-text inter"
        v-if="content.length === 0"
      >
        <slot name="body"> Cart is Empty </slot>
      </section>
      <section
        class="relative p-6 text-autocare-blue inter"
        v-else
        v-html="display"
      >
        <slot name="body">
          {{ display }}
        </slot>
      </section>
      <footer class="flex p-4 border-t justify-between inter">
        <slot name="footer">
          <button
            type="button"
            class="bg-autocare-blue py-1 px-3 text-sm text-white lg:text-base rounded-md"
            @click="clear"
          >
            Clear
          </button>
          <button
            type="button"
            class="bg-autocare-blue py-1 px-3 text-sm text-white lg:text-base rounded-md"
          >
            <router-link to="/checkout"> Checkout </router-link>
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
export default {
  name: "modal",
  data() {
    return {
      content: "Cart is empty",
      display: "Cart is empty",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    clear() {
      this.display = "Cart is empty";
      localStorage.clear();
      window.location.reload();
    },
  },
  mounted() {
    EventBus.$on("cartcontent", (cart) => {
      this.content = cart;
      this.display = cart.join("<br/>");
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

.inter {
  font-family: "Inter", sans-serif;
}

.ibm-font {
  font-family: "IBM Plex Sans", sans-serif;
}
</style>
