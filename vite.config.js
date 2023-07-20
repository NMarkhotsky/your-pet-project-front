import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/you-pet-project-front',
  server: {
    open: '/you-pet-project-front',
  },
});
