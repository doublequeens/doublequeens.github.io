import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://johnq.world',
  integrations: [sitemap()],
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  build: {
    format: 'directory'
  }
});
