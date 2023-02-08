import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [react(),
    UnoCSS({
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      hooks: resolve(__dirname, 'src/hooks'),
      styles: resolve(__dirname, 'src/assets/styles'),
    },
    extensions: ['.js', '.json', '.tsx']
  }
})
