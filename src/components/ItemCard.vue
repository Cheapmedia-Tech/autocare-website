<template>
  <div class="shadow-xl group">
    <div class="h-32 relative">
      <div
        class="absolute bg-gray-400 opacity-50 group-hover:bg-gray-700 z-20 inset-0"
      ></div>
    </div>

    <div class="h-28 p-2">
      <div class="text-xs flex flex-col justify-between h-full">
        <div>
          <p class="font-semibold text-base">{{ item.name }}</p>
          <p class="mt-2 text-body-text">NGN {{ item.price }}</p>
        </div>

        <div class="flex justify-between">
          <p class="inline border-b-2 text-text-grey border-text-grey">
            Model: {{ item.car_model }}
          </p>
        </div>

        <div class="flex justify-between text-register-body">
          <div class="flex">
            <p class="text-xxs">{{ item.model_year }}</p>
          </div>
          <div class="flex items-center">
            <p class="text-xxs">{{ item.weight }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
