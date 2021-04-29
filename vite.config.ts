import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig(
  {
    alias: {
      "@": path.resolve(__dirname, "src"), // 创建别名
    },
    plugins: [
      vue(), 
      vueJsx(),
      styleImport({
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }]
      })
    ],
    server: {
      port: 1015,
      proxy: {
        // '/api': {
        //   target: "",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, '')
        // }
      },
      hmr: {
        overlay: true,
      },
      open: true,
    },
  }
)
