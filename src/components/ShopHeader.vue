<template>
  <div
    class="bg-autocare-blue px-4 sm:pr-10 sm:pl-16 xl:pr-16 xl:pl-24 sm:flex py-6 sm:items-center sm:justify-between xl:mx-auto"
  >
    <div class="flex justify-between items-center w-full lg:w-3/12 xl:w-6/12">
      <div class="w-6/12 sm:w-full">
        <router-link to="/">
          <img
            src="../assets/img/logo.svg"
            alt="logo"
            class="lg:hidden block h-8 w-auto"
          />
          <img
            src="../assets/img/logowithtext.svg"
            alt="logo with text"
            class="h-8 hidden lg:block"
          />
        </router-link>
      </div>
      <div class="flex sm:w-3/12 w-4/12 justify-between">
        <div class="lg:hidden">
          <div class="flex items-start justify-end">
            <a
              href="#"
              @click="showModal"
              class="px-4 py-4 relative space-x-2 bg-white rounded-full"
            >
              <img src="../assets/img/bag.svg" class="h-5" alt="bag" />
            </a>
            <span
              v-if="length"
              class="text-cart-button flex justify-center items-center relative border border-nav-text text-sm font-semibold rounded-full h-6 w-6 bg-white -ml-4"
              >{{ length }}</span
            >
          </div>
          <modal v-show="isModalVisible" @close="closeModal" />
        </div>
        <button class="focus:outline-none lg:hidden" @click="toggle">
          <img
            src="../assets/img/close.svg"
            alt="logo"
            class="h-7 sm:h-9"
            v-if="isopen"
          />
          <img
            src="../assets/img/menu.svg"
            alt="logo"
            class="h-7 sm:h-9"
            v-else
          />
        </button>
      </div>
    </div>
    <div
      class="justify-between space-y-2 lg:space-y-0 inter text-autocare-blue lg:text-white w-11/12 sm:w-auto absolute border-2 lg:border-none border-nav-text bg-white lg:bg-transparent rounded-md top-16 sm:top-20 sm:left-1/2 bottom-auto sm:right-8 lg:inset-0 lg:relative lg:w-8/12 lg:flex lg:flex-row sm:justify-between lg:items-center p-4 sm:p-5 lg:p-0 flex flex-col text-right inter"
      :class="{ hidden: !isopen, flex: isopen }"
    >
      <router-link
        to="/blog"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base"
        >Learn</router-link
      >
      <router-link
        to="/find"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base sm:ml-4"
        >Find a Mechanic</router-link
      >
      <a
        href="#"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base sm:ml-4"
        >Services</a
      >
      <router-link
        to="/shop/web"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base sm:ml-4"
        >Shop</router-link
      >
      <router-link
        to="/about"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base sm:ml-4"
        >About</router-link
      >
      <router-link
        to="/contact"
        class="block py-2 border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-xs xl:text-base sm:ml-4"
        >Contact</router-link
      >
      <div class="hidden lg:block">
        <div class="flex items-start justify-end">
          <a
            href="#"
            @click="showModal"
            class="px-4 py-4 relative space-x-2 bg-white rounded-full"
          >
            <img src="../assets/img/bag.svg" class="h-5" alt="bag" />
          </a>
          <span
            v-if="length"
            class="text-cart-button flex justify-center items-center relative border border-nav-text text-sm font-semibold rounded-full h-6 w-6 bg-white -ml-4"
            >{{ length }}</span
          >
        </div>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      length: 0,
      isModalVisible: false,
      isopen: false,
    };
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  created() {
    EventBus.$on("cartlength", (cartlength) => {
      this.length = cartlength;
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
