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

      <div class="py-8 flex flex-wrap justify-between">
        <div class="sm:w-5/12 w-full">
          <p class="font-semibold">First Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7 sm:mt-0">
          <p class="font-semibold">Last Name</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Phone Number</p>
          <input
            type="number"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Email</p>
          <input
            type="text"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Password</p>
          <input
            type="password"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
        <div class="sm:w-5/12 w-full mt-7">
          <p class="font-semibold">Confirm password</p>
          <input
            type="password"
            class="border border-dark-gray rounded-md focus:outline-none w-full h-10 mt-2 px-3"
          />
        </div>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="rounded-md border border-dark-gray" />
        <p class="ml-4">I agree processing my personal data</p>
      </div>
      <div class="flex sm:justify-end justify-center sm:mt-3 mt-7">
        <button class="px-8 py-2 text-white rounded-md bg-autocare-blue">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
