// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://diverser.com.co",
  output: 'static',

  integrations: [sitemap()],

  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
    plugins: [tailwindcss()],
  },
});