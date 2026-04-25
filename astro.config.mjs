// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
    plugins: [tailwindcss()],
  }
});
