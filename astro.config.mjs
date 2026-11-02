import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ergosetuphub.com',
  build: { format: 'file' }, // about.html, disclosure.html: same URLs as the old site
});
