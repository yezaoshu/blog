import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgIcons from 'vite-plugin-svg-icons'
import ViteFS from 'vite-fs'

const PORT = 7777

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@public': resolve(__dirname, './public'),
    },
  },
  base: '',
  plugins: [
    vue(),
    ViteFS(),
    svgIcons({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/global.scss";'
      }
    }
  },
  envDir: './env',
  server: {
    open: true,
    port: PORT,
    host: '0.0.0.0',
    proxy :{}
  }
})
