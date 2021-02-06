<template>
  <div>
    <nav
      class="bg-autocare-blue px-6 py-4 sm:flex sm:justify-between sm:items-center lg:px-10"
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
        <button
          class="focus:outline-none sm:hidden"
          type="button"
          @click="toggle"
        >
          <svg
            class="h-6 w-6 fill-current text-autocare-orange"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="3" rx="1.5" />
            <rect y="7" width="24" height="3" rx="1.5" />
            <rect y="14" width="24" height="3" rx="1.5" />
          </svg>
        </button>
      </div>

      <div
        class="py-4 px-4 w-4/6 h-10/12 sm:w-full flex flex-col justify-between bg-white absolute top-0 right-0 sm:relative sm:bg-transparent sm:flex sm:flex-row sm:py-2 z-30"
        :class="{ hidden: !isopen, block: isopen }"
      >
        <div class="sm:w-8/12 lg:w-3/6 lg:mx-auto">
          <button
            class="flex justify-end w-full sm:hidden focus:outline-none"
            @click="isopen = false"
          >
            <svg
              class="h-8 w-8 text-right"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#FF970D"
              />
            </svg>
          </button>

          <div
            class="text-right mt-5 sm:flex sm:text-left sm:mt-0 sm:font-hairline sm:justify-center lg:justify-between"
          >
            <router-link
              to="/blog"
              class="block py-2 text-autocare-blue border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-white sm:text-xs xl:text-base"
              >Learn</router-link
            >
            <router-link
              to="/find"
              class="block py-2 text-autocare-blue border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-white sm:text-xs xl:text-base sm:ml-4"
              >Find a Mechanic</router-link
            >
            <a
              href="#"
              class="block py-2 text-autocare-blue border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-white sm:text-xs xl:text-base sm:ml-4"
              >Services</a
            >
            <router-link
              to="/about"
              class="block py-2 text-autocare-blue border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-white sm:text-xs xl:text-base sm:ml-4"
              >About</router-link
            >
            <router-link
              to="/contact"
              class="block py-2 text-autocare-blue border-b border-transparent hover:border-autocare-blue sm:hover:border-autocare-orange font-segoe sm:py-1 sm:text-white sm:text-xs xl:text-base sm:ml-4"
              >Contact</router-link
            >
          </div>
        </div>
        <div
          class="flex justify-between items-center sm:w-4/12 xl:w-3/12 sm:justify-around lg:justify-between xl:justify-around"
        >
          <button
            class="px-6 py-1 h-10 font-segoe border-2 border-autocare-blue rounded-md leading-none sm:text-xs xl:text-base sm:px-4 lg:px-8 sm:py-1 lg:py-2 sm:h-auto focus:outline-none hover:bg-hover-gray hover:border-transparent hover:text-autocare-blue sm:border-white sm:text-white sm:border"
          >
            Login
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSct7EO-DnGCObwq5xOp25M4AcfKWMPbeq39OVh4yhXkmIE-sQ/viewform?usp=sf_link"
          >
            <button
              class="px-6 py-1 h-10 font-segoe border-2 border-autocare-orange rounded-md bg-autocare-orange leading-none sm:text-xs xl:text-base sm:px-4 lg:px-8 sm:py-1 lg:py-2 sm:h-auto focus:outline-none"
            >
              Sign up
            </button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
    };
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
  },
  name: "Header",
};
</script>