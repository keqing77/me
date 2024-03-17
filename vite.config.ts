import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
      '@styles': join(__dirname, "src/styles"),
    }
  },
})
