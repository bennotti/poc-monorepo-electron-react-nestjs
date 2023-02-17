/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import renderer from 'vite-plugin-electron-renderer';
import loadVersion from 'vite-plugin-package-version';
import EnvironmentPlugin from "vite-plugin-environment";

const path = require('path');

export const plugins = [
  react(),
  VitePluginHtmlEnv(),
  loadVersion(),
  EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
  EnvironmentPlugin('all', { prefix: 'VITE_APP_' })
];

const build = {
  chunkSizeWarningLimit: 600,
  rollupOptions: {
    output: {
    },
  },
};

export const resolve = {
  alias: [
    { find: '@', replacement: path.resolve(__dirname, './src') },
    { find: '@app', replacement: path.resolve(__dirname, './src/aplicacao') },
    { find: '@aplicacao', replacement: path.resolve(__dirname, './src/aplicacao') },
    { find: '@infra', replacement: path.resolve(__dirname, './src/infraestrutura') },
    { find: '@infraestrutura', replacement: path.resolve(__dirname, './src/infraestrutura') },
    { find: '@funcionalidades', replacement: path.resolve(__dirname, './src/funcionalidades') },
    { find: '@modulos', replacement: path.resolve(__dirname, './src/funcionalidades') },
    { find: '@componentes', replacement: path.resolve(__dirname, './src/componentes') }
  ],
};

export default defineConfig(({ command, mode }) => {
  if (command == 'serve') {
    return {
      server: {
        open: mode !== 'webmocke2e' ? '/' : undefined,
        disableHostCheck: true,
        hot: true,
      },
      resolve,
      build,
      plugins,
    };
  }

  if (process.env.ELECTRON=='true') {
    plugins.push(renderer());
  }

  return {
    base: './',
    build,
    resolve,
    plugins,
  };
});
