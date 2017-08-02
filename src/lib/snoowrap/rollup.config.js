// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';


export default {
  entry: 'dist/snoowrap.js',
  dest: 'index.js',
  format: 'cjs',
  moduleName: 'snoowrap',
  plugins: [
    builtins(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
