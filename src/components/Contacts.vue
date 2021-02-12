<template>
  <div>
    <Header />
    <div
      class="px-12 py-16 sm:px-20 sm:py-20 lg:px-40 xl:py-24 xl:px-56 lg:min-h-hscreen mx-auto"
    >
      <h1
        class="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold font-graphik text-autocare-blue"
      >
        Get in touch.
      </h1>

      <div class="sm:flex sm:justify-between">
        <div class="mt-16 lg:mt-20 xl:mt-24">
          <div class="border-b border-2 border-autocare-blue w-full"></div>
          <h3
            class="text-sm lg:text-base xl:text-lg mt-3 text-autocare-blue font-semibold font-graphik"
          >
            For general inquiries:
          </h3>
          <p
            class="text-sm lg:text-base xl:text-lg font-segoe text-autocare-blue mt-2"
          >
            contact@myautocare.com
          </p>
        </div>

        <div class="mt-16 lg:mt-20 xl:mt-24">
          <div class="border-b border-2 border-autocare-orange w-full"></div>
          <h3
            class="text-sm lg:text-base xl:text-lg mt-3 text-autocare-blue font-semibold font-graphik"
          >
            Want to chat with us:
          </h3>
          <p
            class="text-sm lg:text-base xl:text-lg font-segoe text-autocare-blue mt-2"
          >
            <a href="#"
              ><span class="border-b border-autocare-orange"
                >Chat on WhatsApp</span
              ></a
            ><br />
            <a href="#" class="mt-1 block">
              <span class="border-b border-autocare-orange"
                >Chat on Telegram</span
              >
            </a>
          </p>
        </div>

        <div class="mt-16 lg:mt-20 xl:mt-24">
          <div class="border-b border-2 border-autocare-blue w-full"></div>
          <h3
            class="text-sm lg:text-base xl:text-lg mt-3 text-autocare-blue font-semibold font-graphik"
          >
            Pay us a visit:
          </h3>
          <p
            class="text-sm lg:text-base xl:text-lg font-segoe text-autocare-blue mt-2"
          >
            3rd floor, XYZ building <br />
            Ogba, Ikeja <br />
            Lagos <br />
            Nigeria
          </p>
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