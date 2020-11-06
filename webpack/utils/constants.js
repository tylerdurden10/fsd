// Core
import { resolve } from 'path';
import { path as ROOT_DIR } from 'app-root-path';

// Constants
export const SRC_DIR = resolve(ROOT_DIR, 'src');
export const DIST_DIR = resolve(ROOT_DIR, 'dist');
export const BUILD_DIR = resolve(ROOT_DIR, 'build');
export const HTML_DIR = resolve(ROOT_DIR, 'src/html');
export const PUG_DIR = resolve(ROOT_DIR, 'src/pug');
export const HOST = 'localhost';
export const PORT = 5001;
export { ROOT_DIR };
