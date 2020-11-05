// Core
import { merge } from 'webpack-merge';

// Constants
import { DIST_DIR, HOST, PORT } from '../utils/constants';

// Common Configuration
import getCommonConfig from '../config/webpack.common';

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
      filename: '[name].bundle.js',
      path: DIST_DIR,
    },
    devServer: {
      contentBase: DIST_DIR,
      publicPath: '/',
      hot: true,
      open: true,
      overlay: true,
      host: HOST,
      port: PORT,
      historyApiFallback: true,
    },
  });
