<template>
  <div class="inter">
    <div class="px-6 py-8 lg:py-10">
      <button
        class="flex flex-row-reverse w-full lg:hidden sm:mt-2 mt-5 focus:outline-none"
        @click="closed"
      >
        <img src="../assets/img/close-blue.svg" alt="" />
      </button>
      <p class="font-semibold ml-3 text-body-text mt-3 lg:mt-0">
        Select one or more <br class="hidden xl:block" />
        categories
      </p>

      <div class="flex flex-col space-y-4 mt-4">
        <div
          v-for="(categories, c) in categorylist"
          :key="c"
          class=""
          @click="closed"
        >
          <Categories :categories="categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";

export default {
  components: {
    Categories,
  },
  methods: {
    closed() {
      this.$emit("closed");
    },
  },
  name: "sidebar",
  data() {
    return {
      categorylist: [
        {
          title: "Transmission & Fluids",
          link: "#",
        },
        {
          title: "Engine",
          link: "#",
        },
        {
          title: "Cooling",
          link: "#",
        },
        {
          title: "Electrical",
          link: "#",
        },
        {
          title: "Hydraulics",
          link: "#",
        },
      ],
    };
  },
};
</script>
