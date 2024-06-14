/*
 * @Author: longze
 * @Date: 2024-06-14 15:50:42
 * @LastEditors: longze
 * @LastEditTime: 2024-06-14 15:50:42
 * @Description: file content
*/
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
// import {
//   videoPlay
// } from 'vue3-video-play'

export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}