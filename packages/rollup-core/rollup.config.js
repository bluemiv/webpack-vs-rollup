import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions,
    }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: './node_modules/**',
      extensions,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
