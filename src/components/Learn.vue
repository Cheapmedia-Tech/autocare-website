<template>
  <div>
    <Header />
    <div
      class="px-10 py-16 sm:px-16 max-w-4xl xl:py-24 xl:px-40 xl:max-w-xxl mx-auto"
    >
      <div class="sm:flex">
        <div
          class="w-full bg-gray-500 h-40 sm:h-56 xl:h-60 lg:h-64 rounded-lg shadow-lg sm:w-7/12"
        ></div>

        <div class="sm:w-5/12 sm:ml-6">
          <div class="sm:w-11/12">
            <p class="text-gray-700 font-segoe-light text-xs mt-2 sm:mt-0">
              <span class="font-segoe uppercase tracking-wide">Motor care </span
              >&bull; Oct. 25th, 2020
            </p>

            <h3
              class="text-lg xl:text-2xl font-semibold leading-tight mt-4 sm:mt-3 text-autocare-blue font-graphik"
            >
              Ten common faults associated with Toyota Cars and what to do
            </h3>

            <p class="mt-5 sm:mt-3 text-xs xl:text-base font-segoe">
              Toyota Company has managed to stay relevant in the vehicle
              industry over the decades and they are renowned to have produced
              some of the best cars the world has ever known.
            </p>

            <a
              href="#"
              class="block mt-3 xl:mt-8 text-xs uppercase font-segoe tracking-wide text-autocare-blue"
              >read more
              <span>
                <img src="../assets/img/arrow.svg" alt="arrow" class="inline" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="sm:flex sm:justify-between">
        <div class="mt-16 sm:w-6/12">
          <div class="sm:w-11/12">
            <div
              class="w-full bg-gray-500 h-40 xl:h-60 lg:h-56 rounded-lg shadow-lg"
            ></div>

            <p class="text-gray-700 font-segoe-light text-xs mt-2 xl:mt-5">
              <span class="font-segoe uppercase tracking-wide">Motor care </span
              >&bull; Oct. 25th, 2020
            </p>

            <h3
              class="text-lg xl:text-2xl font-semibold leading-tight mt-4 text-autocare-blue font-graphik"
            >
              HOW TO WASH YOUR CAR TO AVOID THE BODY FROM FADING
            </h3>

            <p class="mt-5 sm:mt-3 xl:text-base text-xs font-segoe">
              It is quite painful to have successfully purchased your dream car
              and then, fading seems to become a threat. The external part of
              your car is usually protected by layers of primer, paint, and
              topcoat.
            </p>

            <a
              href="learn.html"
              class="block mt-3 text-xs uppercase font-segoe tracking-wide text-autocare-blue"
              >read more
              <span>
                <img src="../assets/img/arrow.svg" alt="arrow" class="inline" />
              </span>
            </a>
          </div>
        </div>

        <div class="mt-16 sm:w-6/12">
          <div class="sm:w-11/12">
            <div
              class="w-full bg-gray-500 h-40 xl:h-60 lg:h-56 rounded-lg shadow-lg"
            ></div>

            <p class="text-gray-700 font-segoe-light text-xs mt-2 xl:mt-5">
              <span class="font-segoe uppercase tracking-wide">Motor care </span
              >&bull; Oct. 25th, 2020
            </p>

            <h3
              class="text-lg xl:text-2xl font-semibold leading-tight mt-4 text-autocare-blue font-graphik"
            >
              Five Simple Car Faults You Can Fix Yourself
            </h3>

            <p class="mt-5 sm:mt-3 xl:text-base text-xs font-segoe">
              Have you ever been in a rush and the car suddenly developed a
              fault and wouldn’t start? Not to worry, these are every day car
              faults and should be anticipated and prepared for.
            </p>

            <a
              href="learn.html"
              class="block mt-3 text-xs uppercase font-segoe tracking-wide text-autocare-blue"
              >read more
              <span>
                <img src="../assets/img/arrow.svg" alt="arrow" class="inline" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
