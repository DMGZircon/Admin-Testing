import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'chart.js': 'chart.js/dist/chart.js',
    },
  },
  server: {
    port: 3000,
  },
});
