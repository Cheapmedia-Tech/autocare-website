import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Learn from "@/components/Learn.vue";
import Dashboard from "@/components/Dashboard.vue";
import Contact from "@/components/Contacts.vue";
import Find from "@/components/Map.vue";
import Shop from "@/components/Shop.vue";
import Hydraulics from "@/components/Hydraulics.vue";
import Checkout from "@/components/Checkout.vue";
import { auth } from "../firebase";
import Signup from "@/components/Signup.vue";
import Tellusmore from "@/components/Tellusmore.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home-page",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router;
