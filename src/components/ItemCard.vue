<template>
  <div class="shadow-xl rounded-t-md group">
    <div class="h-64 relative rounded-t-md">
      <div
        class="absolute bg-gray-400 opacity-50 group-hover:bg-gray-700 rounded-t-md z-20 inset-0"
      ></div>
      <img
        :src="adverts.imagesrc"
        alt="img"
        class="object-cover relative h-full w-full"
      />
    </div>

    <div class="h-52 p-3">
      <div class="text-xs flex flex-col justify-between h-full">
        <p class="font-semibold text-base">{{ adverts.title }}</p>
        <p class="mt-2 text-body-text">
          {{ adverts.description }}
        </p>

        <div class="flex justify-between mt-3 xl:mt-5">
          <p class="inline border-b-2 text-text-grey border-text-grey">
            {{ adverts.vendor }}
          </p>
          <p class="uppercase text-xxs">
            starts from
            <span class="text-xs">NGN {{ adverts.price }}</span>
          </p>
        </div>

        <div class="flex justify-between mt-5 text-register-body">
          <div class="flex">
            <!-- <img src="../assets/img/location.svg" alt="location" /> -->
            <p class="text-xxs">{{ adverts.location }}</p>
          </div>
          <div class="flex items-center">
            <img :src="adverts.channelicon" class="h-3" alt="i" />
            <p class="uppercase ml-1 text-xxs">{{ adverts.channel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["adverts"],
};
</script>
