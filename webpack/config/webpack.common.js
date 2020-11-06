// Core
import { merge } from 'webpack-merge';

// Constants
import { SRC_DIR } from '../utils/constants';

// Modules
import * as modules from '../modules';

// Env
const env = process.env.NODE_ENV;

// Common Configuration
export default () =>
  merge(
    {
      entry: {
        main: [SRC_DIR],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
      },
    },
    modules.setupPug(),
    modules.cleanDir(env),
    modules.loadStyles(env),
    modules.transpileCode()
  );
