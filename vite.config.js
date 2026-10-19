import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const base = process.env.VITE_BASE_PATH ||
  (process.env.VERCEL ? '/' : '/your-pet-project-front/');

export default defineConfig({
  plugins: [react()],
  base: base.endsWith('/') ? base : `${base}/`,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          state: ['@reduxjs/toolkit', 'react-redux', 'redux-persist'],
          forms: ['formik', 'yup'],
          translations: ['i18next', 'react-i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
        },
      },
    },
  },
  server: {
    open: '/your-pet-project-front',
    port: 3001,
    proxy: { '/api': 'http://localhost:3000' },
  },
});
