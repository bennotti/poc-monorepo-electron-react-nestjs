import { defineConfig } from 'vite';

import { plugins, resolve } from './vite.config';

export default defineConfig({
    base: './',
    plugins,
    resolve,
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
          reporter: ['text', 'html'],
          exclude: [
            'node_modules/',
          ],
        },
    }
});
