import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/element/home/Home'
// -----------basic基础-----------
import Layout from '@/element/basic/layout'
import Border from '@/element/basic/border'
import Icon from '@/element/basic/icon'
import Button from '@/element/basic/button'
import Link from '@/element/basic/link'
// -----------form 表单-----------
import Radio from '@//element/form/Radio'
// import Checkbox from '@/element/form/Checkbox'
// import Input from '@/element/form/Input'
// import InputNumber from '@/element/Form/inputNumber'
// import Select from '@/element/form/Select'
// import Cascader from '@/element/form/Cascader'
// import Switch from '@/element/form/Switch'
// import Slider from '@/element/form/Slider'
// import TimePicker from '@/element/form/Timepicker'
// import DataPicker from '@/element/form/DataPicker'
// import DataTimePicker from '@/element/form/DataTimePicker'
// import Upload from '@/element/form/Upload'
// import Rate from '@/element/form/Rate'
// import ColorPicker from '@/element/form/ColorPicker'
// import Transfer from '@/element/form/Transfer'
// import Formform from '@/element/form/Formform'

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
    }, {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }/* , {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    }, {
      path: '/input',
      name: 'Input',
      component: Input
    }, {
      path: '/inputNumber',
      name: 'InputNumber',
      component: InputNumber
    }, {
      path: '/select',
      name: 'Select',
      component: Select
    }, {
      path: '/cascader',
      name: 'Cascader',
      component: Cascader
    }, {
      path: '/switch',
      name: 'Switch',
      component: Switch
    }, {
      path: '/slider',
      name: 'Slider',
      component: Slider
    }, {
      path: '/timepicker',
      name: 'TimePicker',
      component: TimePicker
    }, {
      path: 'dataPicker',
      name: 'DataPicker',
      component: DataPicker
    }, {
      path: '/dataTimePicker',
      name: 'DataTimePicker',
      component: DataTimePicker
    }, {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }, {
      path: '/rate',
      name: 'Rate',
      component: Rate
    }, {
      path: '/colorPicker',
      name: 'ColorPicker',
      component: ColorPicker
    }, {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer
    }, {
      path: '/formform',
      name: 'Formform',
      component: Formform
    } */
  ]
})
