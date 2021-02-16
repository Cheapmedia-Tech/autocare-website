<template>
  <div>
    <router-link
      :to="categories.link"
      class="flex group hover:font-semibold focus:font-semibold cursor-pointer text-body-text"
    >
      <img
        src="../assets/img/ellipse.svg"
        alt="ellipse"
        class="-ml-2 hidden group-focus:block"
      />
      <span class="ml-3">{{ categories.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>