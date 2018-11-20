import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import category from '@/pages/category/index'
import detail from '@/pages/detail/index'
import cart from '@/pages/cart/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
