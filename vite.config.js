import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures root deployment works correctly
  build: {
    outDir: 'dist', // default, make sure matches your gh-pages or Vercel deployment
  },
});
