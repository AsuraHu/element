import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/element/home/Home'
import Layout from '@/element/basic/layout'
import Border from '@/element/basic/border'
import Icon from '@/element/basic/icon'
import Button from '@/element/basic/button'
import Link from '@/element/basic/link'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }, {
      path: '/border',
      name: 'Border',
      component: Border
    }, {
      path: '/icon',
      name: 'Icon',
      component: Icon
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    }, {
      path: '/link',
      name: 'Link',
      component: Link
    }
  ]
})
