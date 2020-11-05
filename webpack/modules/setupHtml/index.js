// Core
import HTMLWebpackPlugin from 'html-webpack-plugin';

// Constants
import { HTML_DIR } from '../../utils/constants';

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
