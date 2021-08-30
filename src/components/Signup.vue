<template>
  <div>
    <nav
      class="bg-autocare-blue px-6 py-8 sm:flex sm:justify-between sm:items-center lg:px-10"
    >
      <div class="flex justify-between items-center sm:w-3/12">
        <a href="https://myautocare.ng">
          <img
            src="../assets/img/logo.svg"
            alt="logo"
            class="lg:hidden block h-8 w-auto"
          />
        </a>
        <a href="https://myautocare.ng">
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
        <span class="font-semibold text-dark-subtext">Sign Up</span> as a Mechanic
      </p>
      <p class="mt-4 text-light-subtext sm:w-8/12">
        Fill in the form below to register for the Mechanic partnership program.
      </p>

      <hr class="border-dark-gray mt-4" />

      <form class="py-8 flex flex-wrap justify-between" @submit.prevent>
        <div class="sm:w-5/12 w-full">
          <p class="font-semibold">First Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="firstname"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7 sm:mt-0">
          <p class="font-semibold">Last Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="lastname"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-8">
          <p class="font-semibold">Phone Number</p>
          <input
            type="number"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="number"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-8">
          <p class="font-semibold">Email</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="email"
          />
        </div>

        <div class="sm:w-5/12 w-full mt-8">
          <p class="font-semibold">Location (State)</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="location"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-8">

          <p class="font-semibold">Major Skill</p>
          <select
            type="check"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
            v-model="car_model">
            <option>Transmission & Hydraulics</option>
            <option>Engines</option>
            <option>Body work</option>
            <option>Body work</option>
          </select>
        </div>
        <div class="w-full mt-8">
          <p class="font-semibold">Briefly describe your experience (include years, brands you've worked on, etc.)</p>
          <textarea
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-44 mt-2 py-3 px-5"
            v-model="complaint"
          />
        </div>
      </form>
      <div class="flex items-center">
        <input type="checkbox" class="rounded-md border border-dark-gray" />
        <p class="ml-4">I agree processing my personal data</p>
      </div>
      <div class="flex sm:justify-end justify-center sm:mt-3 mt-7">
        <button
          class="px-8 py-2 text-white rounded-md bg-autocare-blue"
          @click="signup()"
        >
          Register
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
import axios from "axios";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      location: "",
      car_model: "",
      complaint: "",
      isModalVisible: false,
    };
  },
  methods: {
    signup() {
      this.isModalVisible = true;

      axios
        .post("https://autocare-sheets.herokuapp.com/submit-complaint/", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          number: this.phone_number,
          complaint: this.complaint,
          location: this.location,
          car_model: this.car_model,
        })
        .then(() => {
          console.log("sent");
        })
        .catch((error) => {
          console.log("error: " + error);
        });
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
