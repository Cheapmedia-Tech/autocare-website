import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Learn from "@/components/Learn.vue";
import Contact from "@/components/Contacts.vue";
import Find from "@/components/Map.vue";
import Shop from "@/components/Shop.vue";
import Hydraulics from "@/components/Hydraulics.vue";
import Checkout from "@/components/Checkout.vue";
import Signup from "@/components/Signup.vue";
import Tellusmore from "@/components/Tellusmore.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home-page",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog-home",
      component: Learn,
    },
    {
      path: "/about",
      name: "about-page",
      component: About,
    },
    {
      path: "/contact",
      name: "contact-page",
      component: Contact,
    },
    {
      path: "/find",
      name: "find-mechanic",
      component: Find,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/tellusmore",
      name: "tellusmore",
      component: Tellusmore,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
      children: [
        {
          path: "/shop/hydraulics",
          name: "web",
          component: Hydraulics,
        },
      ],
    },
  ],
});
