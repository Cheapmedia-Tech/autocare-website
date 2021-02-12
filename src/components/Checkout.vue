<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="px-8 xl:px-14 py-10 w-full lg:w-5/12 xl:w-4/12 bg-autocare-blue"
    >
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

      <h3
        class="text-xl sm:text-2xl lg:text-4xl ibm-font mt-10 lg:mt-28 text-white"
      >
        Launch your <br />
        <span class="text-sidebar-yellow">Advertising Campaign</span>
      </h3>
      <img src="#" alt="marketing-rafiki" class="mt-32 hidden lg:block" />
    </div>

    <div
      class="w-full lg:w-7/12 xl:w-8/12 px-14 sm:px-32 lg:px-14 xl:px-28 py-10 lg:py-20 inter"
    >
      <div class="w-10/12 mt-0 lg:mt-20">
        <h4 class="text-xl text-register-header">
          <span class="font-semibold">Complete your Order</span>
        </h4>
        <p class="mt-8 text-body-text font-semibold">
          Launch all your advertising in one place
        </p>
        <p class="mt-4 text-register-body">
          Place your order by filling the details below and we will get back to
          you in less than two working days.
        </p>
      </div>

      <hr class="mt-5 border-register-border" />

      <form @submit.prevent="submitForm" class="mt-5">
        <div class="flex flex-wrap justify-between">
          <div class="flex flex-col w-full lg:w-6/12 lg:pr-3">
            <label for="first_name" class="ml-1">First Name</label>
            <input
              type="text"
              id="first_name"
              class="input"
              v-model="firstname"
            />
          </div>

          <div class="flex flex-col lg:pl-3 w-full lg:w-6/12 mt-5 lg:mt-0">
            <label for="last_name" class="ml-1">Last Name</label>
            <input
              type="text"
              id="last_name"
              class="input"
              v-model="lastname"
            />
          </div>

          <div class="flex flex-col w-full lg:w-6/12 lg:pr-3 mt-5">
            <label for="phone_number" class="ml-1">Phone Number</label>
            <input
              type="number"
              id="phone_number"
              class="input"
              v-model="phone_number"
            />
          </div>

          <div class="flex flex-col w-full lg:w-6/12 lg:pl-3 mt-5">
            <label for="email" class="ml-1">Email</label>
            <input type="text" id="email" class="input" v-model="email" />
          </div>

          <div class="flex flex-col w-full mt-5">
            <label for="email" class="ml-1">Comments</label>
            <textarea
              type="text"
              id="email"
              class="input h-24 p-2"
              v-model="comments"
            />
          </div>
        </div>

        <div class="mt-7">
          <button
            class="bg-autocare-orange rounded-lg px-5 py-2 text-white font-light focus:outline-none focus:ring-4 focus:ring-nav-text focus:ring-opacity-50"
            @click="submitForm"
          >
            <router-link to="/thankyou"> Order </router-link>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "checkout",
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      phone_number: "",
      comments: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("#", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          number: this.phone_number,
          comments: this.comments,
          order: localStorage.cart,
        })
        .then(() => {
          console.log("sent");
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    },
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
