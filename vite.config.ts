/*
 * @Author: web.王晓冬
 * @Date: 2021-08-19 10:25:40
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-09-01 11:28:11
 * @Description: file content
 */
const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3005,
    open: true,
    // 反向代理
    proxy: {
      '/api': {
        target: 'http://xxx.xxxxx.xxx/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    lib: {
      entry: './lib/index.js',
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    // hmr: { overlay: false }
  }
})
