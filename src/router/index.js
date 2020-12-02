import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Learn from '@/components/Learn.vue';
import Contact from '@/components/Contacts.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home-page',
        component: Home
      },
      {
        path: '/blog',
        name: 'blog-home',
        component: Learn
    },
    {
      path: '/about',
      name: 'about-page',
      component: About
    },
    {
      path: '/contact',
      name: 'contact-page',
      component: Contact
    },
]})