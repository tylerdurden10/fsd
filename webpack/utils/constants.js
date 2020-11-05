// Core
import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { path as ROOT_DIR } from 'app-root-path';

// Constants
export const SRC_DIR = resolve(ROOT_DIR, 'src');
export const DIST_DIR = resolve(ROOT_DIR, 'dist');
export const BUILD_DIR = resolve(ROOT_DIR, 'build');
export const HTML_DIR = resolve(ROOT_DIR, 'src/html');
