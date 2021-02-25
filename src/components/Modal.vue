<template>
  <div>
    <div class="modal">
      <div
        class="fixed bg-white top-1/4 right-1/2 -mr-32 flex flex-col rounded-md border-2 border-autocare-blue"
      >
        <section class="relative py-12 px-7 w-64 text-autocare-blue inter">
          <slot name="body">
            <img
              src="../assets/img/tick-with-circle.svg"
              alt=""
              class="w-4/12 mx-auto"
            />
            <p class="mt-6">
              Thank you for getting in touch with us. <br />
              An expert will reach you in 24 hours
            </p>
            <router-link to="/"
              ><p class="mt-9 text-map-gray text-center">
                Go home
              </p></router-link
            >
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
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
</style>
