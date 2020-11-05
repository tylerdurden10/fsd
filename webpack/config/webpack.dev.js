// Core
import { merge } from 'webpack-merge';

// Constants
import { DIST_DIR } from '../utils/constants';

// Common Configuration
import getCommonConfig from '../config/webpack.common';

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    mode: 'development',
    devtool: false,
    output: {
      filename: '[name].bundle.js',
      path: DIST_DIR,
    },
  });
