import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import purgecss from 'astro-purgecss';
import siteConfig from './src/config/site.ts';

const { siteUrl, defaultLanguage, languages } = siteConfig;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: defaultLanguage,
    locales: languages,
  },
  integrations: [
    react(),
    mdx(),
    purgecss({
      content: [
        './src/**/*.astro',
        './src/**/*.md',
        './src/**/*.mdx',
        './src/**/*.js',
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      safelist: [
        'medium-zoom-image--opened',
        'medium-zoom-overlay',
        'medium-zoom-overlay--visible',
        /^hljs-/,
      ],
    }),
    sitemap({
      filter: (page) => {
        if (page.includes('404')) return false;

        // Exclude default language redirect pages from sitemap
        const url = new URL(page);
        if (url.pathname.startsWith(`/${defaultLanguage}/`)) return false;

        return true;
      },
      serialize: (item) => {
        const url = item.url.endsWith('/') ? item.url : `${item.url}/`;
        const isHomepage = url === siteUrl + '/';
        const isLanguageRoot = languages.some(lang => url === `${siteUrl}/${lang}/`);
        const isCategoryPage = url.match(/\/(projects|tutorials|guides)\/$/);

        let changefreq = 'monthly';
        let priority = 0.5;

        if (isHomepage) {
          changefreq = 'weekly';
          priority = 1.0;
        } else if (isLanguageRoot) {
          changefreq = 'weekly';
          priority = 0.9;
        } else if (isCategoryPage) {
          changefreq = 'weekly';
          priority = 0.8;
        } else if (url.includes('/about')) {
          changefreq = 'monthly';
          priority = 0.7;
        } else {
          changefreq = 'monthly';
          priority = 0.6;
        }

        return {
          ...item,
          url,
          changefreq,
          priority,
        };
      },
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.ts')) {
              const filename = assetInfo.name.split('/').pop()?.replace(/\.ts$/, '');
              return `_astro/${filename}.[hash].js`;
            }
            return 'assets/[name].[hash][extname]';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
        '@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
      },
    },
  },
});
