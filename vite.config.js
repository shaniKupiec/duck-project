import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createVuePlugin } from 'vite-plugin-vue';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createVuePlugin()],
})
