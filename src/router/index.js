import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import SingleProduct from '@/components/SingleProduct'
import AdminProducts from '@/components/AdminPanel/Products/ViewProductComponent'
import AdminUsers from '@/components/AdminPanel/Users/ViewUsersComponent'
import AdminSettings from '@/components/AdminPanel/Settings/ProfileSettingsComponent'

// ADMIN PANEL 
import AdminDashboard from '@/components/AdminPanel/Dashboard'

Vue.use(Router)

// axios.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   console.log(error.response.data)
//   if (error.response.status === 401) {
//     store.dispatch('logout')
//     router.push('/login')
//   }
//   return Promise.reject(error)
// })

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/:slug',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:slug',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/admin-dashboard/',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin-panel/products/',
      name: 'AdminProducts',
      component: AdminProducts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin-panel/users/',
      name: 'AdminUsers',
      component: AdminUsers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin-panel/settings/',
      name: 'AdminSettings',
      component: AdminSettings,
      meta: {
        requiresAuth: true
      }
    },
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})
export default router


// router.beforeEach(async(to,from,next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if(router.app.store.getters.loginToken) {
//       next()
//       return
//     }
//     router.app.$store.commit('loginModalState', true)
//     next('/')
//   } else {
//     next()
//   }
// });
