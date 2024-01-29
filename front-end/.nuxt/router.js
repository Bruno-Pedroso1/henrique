import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c8b054e = () => interopDefault(import('../pages/agendamento.vue' /* webpackChunkName: "pages/agendamento" */))
const _79f15444 = () => interopDefault(import('../pages/branchCompany.vue' /* webpackChunkName: "pages/branchCompany" */))
const _6b170da3 = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _d79ddbb8 = () => interopDefault(import('../pages/companies.vue' /* webpackChunkName: "pages/companies" */))
const _c30f6b2c = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _1ac3d6a5 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _9a7aa350 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _8cfc30de = () => interopDefault(import('../pages/userHome.vue' /* webpackChunkName: "pages/userHome" */))
const _5666f98e = () => interopDefault(import('../pages/voucherBranch.vue' /* webpackChunkName: "pages/voucherBranch" */))
const _cdd7febc = () => interopDefault(import('../pages/voucherUser.vue' /* webpackChunkName: "pages/voucherUser" */))
const _2955ce2a = () => interopDefault(import('../pages/admin/addresses.vue' /* webpackChunkName: "pages/admin/addresses" */))
const _72cf3ada = () => interopDefault(import('../pages/admin/agenda.vue' /* webpackChunkName: "pages/admin/agenda" */))
const _7a1d881e = () => interopDefault(import('../pages/admin/customers.vue' /* webpackChunkName: "pages/admin/customers" */))
const _61aa8246 = () => interopDefault(import('../pages/admin/dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _0caa3bca = () => interopDefault(import('../pages/admin/management.vue' /* webpackChunkName: "pages/admin/management" */))
const _39f41d92 = () => interopDefault(import('../pages/admin/modeloDashBoard.vue' /* webpackChunkName: "pages/admin/modeloDashBoard" */))
const _ef6bc518 = () => interopDefault(import('../pages/admin/payments.vue' /* webpackChunkName: "pages/admin/payments" */))
const _2bba4844 = () => interopDefault(import('../pages/admin/schedule.vue' /* webpackChunkName: "pages/admin/schedule" */))
const _5de44105 = () => interopDefault(import('../pages/admin/schedules.vue' /* webpackChunkName: "pages/admin/schedules" */))
const _8941c3b6 = () => interopDefault(import('../pages/admin/services.vue' /* webpackChunkName: "pages/admin/services" */))
const _7691412c = () => interopDefault(import('../pages/admin/settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _505308d1 = () => interopDefault(import('../pages/admin/users.vue' /* webpackChunkName: "pages/admin/users" */))
const _43c8b608 = () => interopDefault(import('../pages/admin/voucherAdmin.vue' /* webpackChunkName: "pages/admin/voucherAdmin" */))
const _c1f5ce90 = () => interopDefault(import('../pages/customer/addresses.vue' /* webpackChunkName: "pages/customer/addresses" */))
const _70b1e086 = () => interopDefault(import('../pages/customer/customerVoucher.vue' /* webpackChunkName: "pages/customer/customerVoucher" */))
const _45937b04 = () => interopDefault(import('../pages/customer/data.vue' /* webpackChunkName: "pages/customer/data" */))
const _54612439 = () => interopDefault(import('../pages/customer/historic.vue' /* webpackChunkName: "pages/customer/historic" */))
const _8414448e = () => interopDefault(import('../pages/customer/home.vue' /* webpackChunkName: "pages/customer/home" */))
const _70371ff2 = () => interopDefault(import('../pages/customer/payments.vue' /* webpackChunkName: "pages/customer/payments" */))
const _29bd2e71 = () => interopDefault(import('../pages/customer/schedule.vue' /* webpackChunkName: "pages/customer/schedule" */))
const _38b0ab2f = () => interopDefault(import('../pages/master/customers.vue' /* webpackChunkName: "pages/master/customers" */))
const _e4843c24 = () => interopDefault(import('../pages/master/dashboard.vue' /* webpackChunkName: "pages/master/dashboard" */))
const _3bbd0344 = () => interopDefault(import('../pages/master/employee.vue' /* webpackChunkName: "pages/master/employee" */))
const _f39a8016 = () => interopDefault(import('../pages/master/home.vue' /* webpackChunkName: "pages/master/home" */))
const _207b7ad9 = () => interopDefault(import('../pages/master/management.vue' /* webpackChunkName: "pages/master/management" */))
const _f3a4577a = () => interopDefault(import('../pages/master/payments.vue' /* webpackChunkName: "pages/master/payments" */))
const _2ff2daa6 = () => interopDefault(import('../pages/master/schedule.vue' /* webpackChunkName: "pages/master/schedule" */))
const _bcce9cf0 = () => interopDefault(import('../pages/master/voucher.vue' /* webpackChunkName: "pages/master/voucher" */))
const _7d34e906 = () => interopDefault(import('../pages/sso/address.vue' /* webpackChunkName: "pages/sso/address" */))
const _554e83ae = () => interopDefault(import('../pages/sso/branch.vue' /* webpackChunkName: "pages/sso/branch" */))
const _44762850 = () => interopDefault(import('../pages/sso/cities.vue' /* webpackChunkName: "pages/sso/cities" */))
const _15a080f4 = () => interopDefault(import('../pages/sso/company.vue' /* webpackChunkName: "pages/sso/company" */))
const _52d39c06 = () => interopDefault(import('../pages/sso/countries.vue' /* webpackChunkName: "pages/sso/countries" */))
const _0779c746 = () => interopDefault(import('../pages/sso/getCustomer.vue' /* webpackChunkName: "pages/sso/getCustomer" */))
const _518a7a17 = () => interopDefault(import('../pages/sso/getMasterUsers.vue' /* webpackChunkName: "pages/sso/getMasterUsers" */))
const _a3c15ae8 = () => interopDefault(import('../pages/sso/getSuperUsers.vue' /* webpackChunkName: "pages/sso/getSuperUsers" */))
const _9fc28734 = () => interopDefault(import('../pages/sso/getUsersAdmin.vue' /* webpackChunkName: "pages/sso/getUsersAdmin" */))
const _633996a6 = () => interopDefault(import('../pages/sso/home.vue' /* webpackChunkName: "pages/sso/home" */))
const _5db8d646 = () => interopDefault(import('../pages/sso/integration.vue' /* webpackChunkName: "pages/sso/integration" */))
const _d883d95a = () => interopDefault(import('../pages/sso/paymentMethods.vue' /* webpackChunkName: "pages/sso/paymentMethods" */))
const _4197ea74 = () => interopDefault(import('../pages/sso/payments.vue' /* webpackChunkName: "pages/sso/payments" */))
const _76e0784f = () => interopDefault(import('../pages/sso/paymentVoucher.vue' /* webpackChunkName: "pages/sso/paymentVoucher" */))
const _b91eae44 = () => interopDefault(import('../pages/sso/schedule.vue' /* webpackChunkName: "pages/sso/schedule" */))
const _635fd7f6 = () => interopDefault(import('../pages/sso/schedules.vue' /* webpackChunkName: "pages/sso/schedules" */))
const _6c74b4ca = () => interopDefault(import('../pages/sso/scheduling.vue' /* webpackChunkName: "pages/sso/scheduling" */))
const _74aceb25 = () => interopDefault(import('../pages/sso/services.vue' /* webpackChunkName: "pages/sso/services" */))
const _782c3689 = () => interopDefault(import('../pages/sso/states.vue' /* webpackChunkName: "pages/sso/states" */))
const _70523792 = () => interopDefault(import('../pages/sso/user.vue' /* webpackChunkName: "pages/sso/user" */))
const _3ec674d4 = () => interopDefault(import('../pages/sso/userBranch.vue' /* webpackChunkName: "pages/sso/userBranch" */))
const _7f2add92 = () => interopDefault(import('../pages/sso/voucher.vue' /* webpackChunkName: "pages/sso/voucher" */))
const _27c283a9 = () => interopDefault(import('../pages/superadmin/company.vue' /* webpackChunkName: "pages/superadmin/company" */))
const _3c1973ca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agendamento",
    component: _1c8b054e,
    name: "agendamento"
  }, {
    path: "/branchCompany",
    component: _79f15444,
    name: "branchCompany"
  }, {
    path: "/categories",
    component: _6b170da3,
    name: "categories"
  }, {
    path: "/companies",
    component: _d79ddbb8,
    name: "companies"
  }, {
    path: "/register",
    component: _c30f6b2c,
    name: "register"
  }, {
    path: "/services",
    component: _1ac3d6a5,
    name: "services"
  }, {
    path: "/support",
    component: _9a7aa350,
    name: "support"
  }, {
    path: "/userHome",
    component: _8cfc30de,
    name: "userHome"
  }, {
    path: "/voucherBranch",
    component: _5666f98e,
    name: "voucherBranch"
  }, {
    path: "/voucherUser",
    component: _cdd7febc,
    name: "voucherUser"
  }, {
    path: "/admin/addresses",
    component: _2955ce2a,
    name: "admin-addresses"
  }, {
    path: "/admin/agenda",
    component: _72cf3ada,
    name: "admin-agenda"
  }, {
    path: "/admin/customers",
    component: _7a1d881e,
    name: "admin-customers"
  }, {
    path: "/admin/dashboard",
    component: _61aa8246,
    name: "admin-dashboard"
  }, {
    path: "/admin/management",
    component: _0caa3bca,
    name: "admin-management"
  }, {
    path: "/admin/modeloDashBoard",
    component: _39f41d92,
    name: "admin-modeloDashBoard"
  }, {
    path: "/admin/payments",
    component: _ef6bc518,
    name: "admin-payments"
  }, {
    path: "/admin/schedule",
    component: _2bba4844,
    name: "admin-schedule"
  }, {
    path: "/admin/schedules",
    component: _5de44105,
    name: "admin-schedules"
  }, {
    path: "/admin/services",
    component: _8941c3b6,
    name: "admin-services"
  }, {
    path: "/admin/settings",
    component: _7691412c,
    name: "admin-settings"
  }, {
    path: "/admin/users",
    component: _505308d1,
    name: "admin-users"
  }, {
    path: "/admin/voucherAdmin",
    component: _43c8b608,
    name: "admin-voucherAdmin"
  }, {
    path: "/customer/addresses",
    component: _c1f5ce90,
    name: "customer-addresses"
  }, {
    path: "/customer/customerVoucher",
    component: _70b1e086,
    name: "customer-customerVoucher"
  }, {
    path: "/customer/data",
    component: _45937b04,
    name: "customer-data"
  }, {
    path: "/customer/historic",
    component: _54612439,
    name: "customer-historic"
  }, {
    path: "/customer/home",
    component: _8414448e,
    name: "customer-home"
  }, {
    path: "/customer/payments",
    component: _70371ff2,
    name: "customer-payments"
  }, {
    path: "/customer/schedule",
    component: _29bd2e71,
    name: "customer-schedule"
  }, {
    path: "/master/customers",
    component: _38b0ab2f,
    name: "master-customers"
  }, {
    path: "/master/dashboard",
    component: _e4843c24,
    name: "master-dashboard"
  }, {
    path: "/master/employee",
    component: _3bbd0344,
    name: "master-employee"
  }, {
    path: "/master/home",
    component: _f39a8016,
    name: "master-home"
  }, {
    path: "/master/management",
    component: _207b7ad9,
    name: "master-management"
  }, {
    path: "/master/payments",
    component: _f3a4577a,
    name: "master-payments"
  }, {
    path: "/master/schedule",
    component: _2ff2daa6,
    name: "master-schedule"
  }, {
    path: "/master/voucher",
    component: _bcce9cf0,
    name: "master-voucher"
  }, {
    path: "/sso/address",
    component: _7d34e906,
    name: "sso-address"
  }, {
    path: "/sso/branch",
    component: _554e83ae,
    name: "sso-branch"
  }, {
    path: "/sso/cities",
    component: _44762850,
    name: "sso-cities"
  }, {
    path: "/sso/company",
    component: _15a080f4,
    name: "sso-company"
  }, {
    path: "/sso/countries",
    component: _52d39c06,
    name: "sso-countries"
  }, {
    path: "/sso/getCustomer",
    component: _0779c746,
    name: "sso-getCustomer"
  }, {
    path: "/sso/getMasterUsers",
    component: _518a7a17,
    name: "sso-getMasterUsers"
  }, {
    path: "/sso/getSuperUsers",
    component: _a3c15ae8,
    name: "sso-getSuperUsers"
  }, {
    path: "/sso/getUsersAdmin",
    component: _9fc28734,
    name: "sso-getUsersAdmin"
  }, {
    path: "/sso/home",
    component: _633996a6,
    name: "sso-home"
  }, {
    path: "/sso/integration",
    component: _5db8d646,
    name: "sso-integration"
  }, {
    path: "/sso/paymentMethods",
    component: _d883d95a,
    name: "sso-paymentMethods"
  }, {
    path: "/sso/payments",
    component: _4197ea74,
    name: "sso-payments"
  }, {
    path: "/sso/paymentVoucher",
    component: _76e0784f,
    name: "sso-paymentVoucher"
  }, {
    path: "/sso/schedule",
    component: _b91eae44,
    name: "sso-schedule"
  }, {
    path: "/sso/schedules",
    component: _635fd7f6,
    name: "sso-schedules"
  }, {
    path: "/sso/scheduling",
    component: _6c74b4ca,
    name: "sso-scheduling"
  }, {
    path: "/sso/services",
    component: _74aceb25,
    name: "sso-services"
  }, {
    path: "/sso/states",
    component: _782c3689,
    name: "sso-states"
  }, {
    path: "/sso/user",
    component: _70523792,
    name: "sso-user"
  }, {
    path: "/sso/userBranch",
    component: _3ec674d4,
    name: "sso-userBranch"
  }, {
    path: "/sso/voucher",
    component: _7f2add92,
    name: "sso-voucher"
  }, {
    path: "/superadmin/company",
    component: _27c283a9,
    name: "superadmin-company"
  }, {
    path: "/",
    component: _3c1973ca,
    name: "index"
  }, {
    path: "/",
    component: _3c1973ca,
    name: "Welcome"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
