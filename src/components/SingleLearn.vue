<template>
  <div>
    <Header />
    <div
      class="px-10 py-16 sm:px-24 max-w-4xl sm:max-w-6xl xl:max-w-2exl xl:py-24 xl:px-40 mx-auto"
    >
      <div class="sm:px-24">
        <h1
          class="text-2xl xl:text-4xl font-bold leading-tight w-11/12 text-autocare-blue font-graphik"
        >
          Five Simple Car Faults You Can Fix Yourself
        </h1>

        <div class="mt-4 flex items-center">
          <div
            class="border-2 border-autocare-orange w-4 h-4 rounded-full"
          ></div>
          <div class="ml-2">
            <p class="leading-tight text-xs text-autocare-blue font-segoe">
              <span class="font-segoe-bold">The AutoCare Team,</span> Oct. 25,
              2020 &middot; 5 min read
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-500 h-32 sm:h-48 lg:h-60 xl:h-70 shadow-lg rounded-lg mt-10"
      ></div>

      <div
        class="mt-10 xl:text-lg text-autocare-blue font-light sm:px-24 font-graphik"
      >
        <p>
          Have you ever been in a rush and the car suddenly developed a fault
          and wouldn’t start? Not to worry, these are every day car faults and
          should be anticipated and prepared for. However there are particular
          repairs that you can fix yourself whenever some parts of your car
          become faulty.
          <br />
          <br />
          These repairs require no special tools neither do they need
          professional expertise. Five of these repairs are:
          <br />
          <br />
          <span class="font-semibold">Dead battery:</span> this usually happen
          when you leave the headlights on as this drains the battery power
          while you were away. This incident does not require the service of an
          expatriate because it is something you can do yourself. Simply connect
          the positive lead to the appropriate terminal on the battery while the
          negative lead is connected to the chassis or engine ground. Once this
          is done, turn on the pack and start your car. Put your jump pack on
          the included charger overnight to get it charged for subsequent times.
          <br />
          In the absence of a jump pack, get another car to help you jump start
          your car while you revive it to life.
          <br />
          <br />
          Tools needed: Jump pack, your hands.
          <br />
          <br />
          <span class="font-semibold">Flat Tire:</span> a tire deflates without
          a forewarning; you should be used to that by now. Flat tires are a
          result of running over sharp objects that puncture the tire. Thanks to
          spare tire that always come to the rescue. All that is needed in this
          instance is; first secure the car with wheel wedges against each side
          of the tire you are changing. Then, jack up the car, unscrew the bolts
          that held the tire in place, replace the old tire with the spare and
          fix the bolts back.
          <br />
          <br />
          In the absence of a spare, always have a can of tire sealant to seal
          up the puncture in the tire, take you to safety while your mechanic
          works on further replacement or replacement.
        </p>
      </div>

      <div class="mt-20 sm:mt-32">
        <div
          class="bg-white rounded-lg shadow-xl px-4 py-8 sm:px-12 sm:py-10 lg:px-20 lg:py-20 xl:px-24"
        >
          <div class="px-8 sm:px-12">
            <h1
              class="text-sm lg:text-lg xl:text-2xl leading-tight font-medium text-autocare-blue font-graphik"
            >
              Join our email list and get notified about new content
            </h1>
            <p
              class="text-xs lg:text-base xl:text-xl leading-tight mt-2 sm:mt-4 lg:mt-8 text-gray-600 font-segoe"
            >
              Be the first to receive our latest content with the ability to
              opt-out at anytime. We promise to not spam your inbox or share
              your email with any third parties.
            </p>
          </div>
          <div class="sm:px-20">
            <div class="relative mt-5 lg:mt-12 font-graphik">
              <input
                type="text"
                name=""
                id=""
                class="w-full rounded-full bg-gray-200 text-xs lg:text-base px-4 py-3 font-thin focus:outline-none"
                placeholder="Enter your Email"
              />
              <button
                class="text-xs lg:text-base border border-autocare-blue rounded-full px-4 py-1 absolute right-0 mt-2 mr-2 hover:bg-autocare-blue hover:text-white hover:border-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="flex items-center mt-20 justify-between">
            <p class="text-xs text-gray-600 w-7/12 sm:w-4/12 font-segoe">
              More articles from the blog
            </p>
            <div class="border-b border-gray-400 w-5/12 sm:w-8/12"></div>
          </div>

          <div class="sm:flex">
            <div class="mt-10 sm:w-7/12">
              <div class="sm:w-11/12">
                <div
                  class="w-full bg-gray-500 h-40 lg:h-56 rounded-lg shadow-lg"
                ></div>
                <h3
                  class="text-lg lg:text-xl font-semibold leading-tight mt-4 text-autocare-blue font-graphik"
                >
                  Ten common faults associated with Toyota Cars and what to do
                </h3>

                <p class="mt-3 sm:mt-3 lg:mt-6 text-xs lg:text-base font-segoe">
                  Toyota Company has managed to stay relevant in the vehicle
                  industry over the decades...
                </p>
              </div>
            </div>

            <div class="mt-10 sm:w-5/12">
              <div class="sm:w-11/12">
                <div
                  class="w-full bg-gray-500 h-40 lg:h-56 rounded-lg shadow-lg"
                ></div>
                <h3
                  class="text-lg lg:text-xl font-semibold leading-tight mt-4 text-autocare-blue font-graphik"
                >
                  How to wash your car to keep the body from fading
                </h3>

                <p class="mt-3 sm:mt-3 lg:mt-6 text-xs lg:text-base font-segoe">
                  It is quite painful to have successfully purchased your dream
                  car and then
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>
