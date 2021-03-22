<template>
  <div class="shadow-xl group">
    <div class="h-32 relative">
      <div
        class="absolute bg-gray-400 opacity-50 group-hover:bg-gray-700 inset-0"
      >
        <img
          v-if="item.name.toLowerCase().includes('filter')"
          class="h-full mx-auto"
          src="../assets/img/filter.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('engine')"
          class="h-full mx-auto"
          src="../assets/img/engine-shop.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('brake')"
          class="h-full mx-auto"
          src="../assets/img/brake.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('battery')"
          class="h-full mx-auto"
          src="../assets/img/car-battery.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('gear')"
          class="h-full mx-auto"
          src="../assets/img/tool.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('shock')"
          class="h-full mx-auto"
          src="../assets/img/shock-absorber.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('tire')"
          class="h-full mx-auto"
          src="../assets/img/tire.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('fan')"
          class="h-full mx-auto"
          src="../assets/img/fan.svg"
        />
        <img
          v-else-if="item.name.toLowerCase().includes('headlight')"
          class="h-full mx-auto"
          src="../assets/img/headlight.svg"
        />
        <img
          v-else
          class="h-full mx-auto"
          src="../assets/img/mechanic.svg"
        />
      </div>
    </div>

    <div class="h-28 p-2">
      <div class="text-xs flex flex-col justify-between h-full">
        <div>
          <p class="font-semibold text-base whitespace-nowrap truncate">
            {{ item.name }}
          </p>
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
