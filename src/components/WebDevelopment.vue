<template>
  <div>
    <div class="px-2 sm:px-7 lg:px-8 py-10">
      <p class="ibm-font text-lg">Web Development</p>
      <p class="text-register-body text-sm inter"></p>

      <hr class="mt-2 border-register-border" />

      <div class="flex flex-wrap">
        <div
          v-for="(adverts, a) in advertcards"
          :key="a"
          class="w-4/12 max-w-390px min-w-350px px-4 mt-8"
        >
          <ItemCard :adverts="adverts" />
          <button
            @click="addtocart(a)"
            class="bg-cart-button uppercase ibm-font text-white w-full text-xs py-2 -mt-14 rounded-b-md focus:outline-none"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus.js";
import ItemCard from "@/components/ItemCard.vue";
export default {
  components: {
    ItemCard,
  },
  data() {
    return {
      cart: [],
      advertcards: [
        {
          title: "Single Page Website",
          price: "60,000",
          imagesrc: "Chief Executive Officer ",
          vendor: "Cheapmedia",
          channelicon:
            "https://res.cloudinary.com/dq6iuhnpr/image/upload/v1612479601/landingpage-icons/small-icons/globe_1_s6xv1p.svg",
          channel: "Web development",
          description:
            "Ideal for personal blogs, academic and professional profiles, small businesses, and creative portfolio showcasing. ",
          location: "N/A",
        },
        {
          title: "Small Multi-page Website",
          price: "105,000",
          imagesrc: "Chief Executive Officer ",
          vendor: "Cheapmedia",
          channelicon:
            "https://res.cloudinary.com/dq6iuhnpr/image/upload/v1612479601/landingpage-icons/small-icons/globe_1_s6xv1p.svg",
          channel: "Web development",
          description:
            "Ideal for small and medium scale businesses, non-profit organisations, NGOs, creative agencies, etc. ",
          location: "N/A",
        },
        {
          title: "Medium-scale Multi-page Website",
          price: "150,000",
          imagesrc: "Chief Executive Officer ",
          vendor: "Cheapmedia",
          channelicon:
            "https://res.cloudinary.com/dq6iuhnpr/image/upload/v1612479601/landingpage-icons/small-icons/globe_1_s6xv1p.svg",
          channel: "Web development",
          description:
            "Ideal for medium to large scale businesses, organisations, online communities, educational and religious institutions, etc.",
          location: "N/A",
        },
        {
          title: "E-Commerce Website",
          price: "240,000",
          imagesrc: "Chief Executive Officer ",
          vendor: "Cheapmedia",
          channelicon:
            "https://res.cloudinary.com/dq6iuhnpr/image/upload/v1612479601/landingpage-icons/small-icons/globe_1_s6xv1p.svg",
          channel: "Web development",
          description:
            "Ideal for restaurants, retail stores, craft industries, etc. Users will be able to order and make payments online.",
          location: "N/A",
        },
      ],
    };
  },
  methods: {
    addtocart(a) {
      if (this.cart.indexOf(this.advertcards[a].title) !== -1) {
        this.cart.splice(this.cart.indexOf(this.advertcards[a].title), 1);
      } else {
        this.cart.push(this.advertcards[a].title);
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
