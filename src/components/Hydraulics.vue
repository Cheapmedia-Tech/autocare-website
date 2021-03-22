<template>
  <div>
    <div class="px-2 sm:px-7 lg:px-8 py-10">
      <p class="ibm-font text-lg">All Products</p>
      <p class="text-register-body text-sm inter"></p>

      <hr class="mt-2 border-register-border" />

      <div class="flex flex-wrap">
        <div
          v-for="(items, a) in pageOfItems"
          :key="a"
          class="w-2/12 min-w-250px px-4 mt-8"
        >
          <ItemCard :item="items" />
          <button
            @click="addtocart(a)"
            class="bg-cart-button uppercase ibm-font text-white w-full text-xs py-2 -mt-14 rounded-b-md focus:outline-none"
          >
            add to cart
          </button>
        </div>
      </div>

      <Pagination
        :items="itemcards"
        :pageSize="15"
        @changePage="onChangePage"
        class="flex justify-center w-full mt-12"
      />
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
import ItemCard from "@/components/ItemCard.vue";
import Pagination from "@/components/Pagination.vue";
import itemdata from "../data/autocare-parts.json";
export default {
  components: {
    ItemCard,
    Pagination,
  },
  data() {
    return {
      cart: [],
      itemcards: itemdata,
      currentPage: 1,
      perPage: 2,
      total: 20,
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    addtocart(a) {
      if (this.cart.indexOf(this.itemcards[a].serial) !== -1) {
        this.cart.splice(this.cart.indexOf(this.itemcards[a].serial), 1);
      } else {
        this.cart.push(this.itemcards[a].name);
      }
      this.saveItem();
      EventBus.$emit("cartlength", this.cart.length);
      EventBus.$emit("cartcontent", this.cart);
    },
    saveItem() {
      let parsed = JSON.stringify(this.cart);
      localStorage.setItem("cart", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("cart"))
      this.cart = JSON.parse(localStorage.getItem("cart"));
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
