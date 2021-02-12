<template>
  <div>
    <ShopHeader class="fixed w-full z-50" />
    <div
      class="flex divide-x-2 lg:divide-register-body pt-16 sm:pt-20 lg:pt-24"
    >
      <div
        class="lg:w-3/12 xl:w-auto absolute border-r lg:border-none border-register-body lg:relative z-30 bg-white h-full"
        :class="{ hidden: !isopen, flex: isopen, 'lg:block': !isopen }"
      >
        <Sidebar @closed="closeside" />
      </div>
      <div class="lg:w-9/12 xl:w-10/12">
        <button
          class="focus:outline-none sm:mt-10 mt-14 ml-3 lg:hidden flex items-center"
          @click="open"
        >
          <img src="../assets/img/right-arrow.svg" alt="" />
          <span class="text-xs ml-2">open sidebar</span>
        </button>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    ShopHeader,
    Sidebar,
  },
  data() {
    return {
      isopen: false,
    };
  },
  methods: {
    open() {
      this.isopen = true;
    },
    closeside() {
      this.isopen = false;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "";
      },
    },
  },
};
</script>