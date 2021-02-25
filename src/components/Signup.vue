<template>
  <div>
    <nav
      class="bg-autocare-blue px-6 py-8 sm:flex sm:justify-between sm:items-center lg:px-10"
    >
      <div class="flex justify-between items-center sm:w-3/12">
        <a href="/">
          <img
            src="../assets/img/logo.svg"
            alt="logo"
            class="lg:hidden block h-8 w-auto"
          />
        </a>
        <a href="/">
          <img
            src="../assets/img/logowithtext.svg"
            alt="logo with text"
            class="h-8 hidden lg:block"
          />
        </a>
      </div>
    </nav>
    <div class="xl:p-32 sm:p-24 p-16 xl:w-9/12 lg:w-11/12 mx-auto">
      <p class="text-2xl">
        <span class="font-semibold text-dark-subtext">Sign Up</span> and lodge
        your complaint
      </p>
      <p class="mt-4 text-light-subtext lg:w-6/12 sm:w-8/12">
        Let’s get you set up so you can begin ordering media and advertising
        services.
      </p>

      <hr class="border-dark-gray mt-4" />

      <form class="py-8 flex flex-wrap justify-between" @submit.prevent>
        <div class="sm:w-5/12 w-full">
          <p class="font-semibold">First Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.firstname"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7 sm:mt-0">
          <p class="font-semibold">Last Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.lastname"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Phone Number</p>
          <input
            type="number"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.number"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Email</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.email"
          />
        </div>

        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Location (State)</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.location"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Car Model</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model.trim="signupForm.car_model"
          />
        </div>
        <div class="w-full mt-7">
          <p class="font-semibold">Details of your issue</p>
          <textarea
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-44 mt-2 py-3 px-5"
            v-model.trim="signupForm.complaint"
          />
        </div>
      </form>
      <div class="flex items-center">
        <input type="checkbox" class="rounded-md border border-dark-gray" />
        <p class="ml-4">I agree processing my personal data</p>
      </div>
      <div class="flex items-center mt-4">
        <router-link to="/login" class="underline text-dark-gray"
          >Already have an account? Login</router-link
        >
      </div>
      <div class="flex sm:justify-end justify-center sm:mt-3 mt-7">
        <button
          class="px-8 py-2 text-white rounded-md bg-autocare-blue"
          @click="showModal()"
        >
          Sign up
        </button>
      </div>
    </div>
    <div class="">
      <modal v-show="isModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      signupForm: {
        firstname: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: "",
        location: "",
        car_model: "",
        complaint: "",
      },
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>