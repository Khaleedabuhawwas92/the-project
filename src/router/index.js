import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "Home",
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/Home.vue"),
   },
   {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/About.vue"),
   },
   {
      path: "/reports",
      name: "Reports",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/Reports.vue"),
   },
   {
      path: "/lading",
      name: "Lading",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/bills-of-lading.vue"
         ),
   },
   {
      path: "/exchange",
      name: "Exchange",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/bills-of-exchange.vue"
         ),
   },
   {
      path: "/invoices",
      name: "Invoices",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../components/Invoices.vue"),
   },
   {
      path: "/entry-bounds",
      name: "Entry Bounds",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/entry-bonds.vue"
         ),
   },
   {
      path: "/downlode-permissions",
      name: "Downlode permissions",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/downlode-permission.vue"
         ),
   },
   {
      path: "/receipt-voucher",
      name: "Receipt Voucher",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/receipt-voucher.vue"
         ),
   },
   {
      path: "/billsOfLadingform",
      name: "Bills Of Lading FORM",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(
            /* webpackChunkName: "about" */ "../components/Forms/billsOfLading-FORM.vue"
         ),
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
