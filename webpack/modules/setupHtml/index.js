// Core
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { readdirSync } from 'fs';

// Constants
import { HTML_DIR, PUG_DIR } from '../../utils/constants';

// Pug Pages
const pages = readdirSync(`${PUG_DIR}/pages`).filter(page =>
  page.endsWith('.pug')
);

// Setup Html
export const setupHtml = env => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: `${HTML_DIR}/index.html`,
      title: '🚀 webpack template',
      filename:
        env === 'production' ? 'index.[contenthash].html' : 'index.html',
    }),
  ],
});

export const setupPug = () => ({
  module: {
    rules: [{ test: /\.pug$/, use: 'pug-loader' }],
  },
  plugins: [
    ...pages.map(
      page =>
        new HTMLWebpackPlugin({
          template: `${PUG_DIR}/pages/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
        })
    ),
  ],
});
