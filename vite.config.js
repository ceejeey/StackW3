import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  rewrites: [{ source: '/(.*)', destination: '/' }],
  // rewrites: [{ source: '/(.*)', destination: '/index.html' }],

  plugins: [react(), vanillaExtractPlugin()]
});
