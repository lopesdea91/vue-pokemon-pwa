import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let base = '/'

  if (mode !== 'development') {
    base = '/vue-pokemon-pwa'
  }

  return {
    plugins: [
      vue({ reactivityTransform: true })
    ],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'docs',
    }
  }
})
