import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        protection: resolve(__dirname, 'protection.html'),
        services: resolve(__dirname, 'services.html'),
        team: resolve(__dirname, 'team.html'),
        resources: resolve(__dirname, 'resources.html'),
        'estate-planning': resolve(__dirname, 'estate-planning.html'),
        'mortgage-planning': resolve(__dirname, 'mortgage-planning.html'),
        'business-planning': resolve(__dirname, 'business-planning.html'),
        'retirement-planning': resolve(__dirname, 'retirement-planning.html'),
        'investment-management': resolve(__dirname, 'investment-management.html'),
        'pension-advice': resolve(__dirname, 'pension-advice.html'),
        'tax-planning': resolve(__dirname, 'tax-planning.html'),
      },
    },
  },
  plugins: [
    // Image Optimizer - optimizes all images including WebP generation
    ViteImageOptimizer({
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      webp: {
        lossless: false,
        quality: 85,
      },
      // Enable WebP conversion
      test: /\.(jpe?g|png|gif|svg)$/i,
      includePublic: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
