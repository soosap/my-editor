import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json'

const sourceMapEnabled = false

const rollupConfig = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: sourceMapEnabled,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: sourceMapEnabled,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      image(),
      commonjs({ sourceMap: sourceMapEnabled }),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
        sourceMap: sourceMapEnabled,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: sourceMapEnabled,
      }),
      terser({
        sourceMap: sourceMapEnabled,
      }),
    ],
  },
  // This is a plugin that lets you roll-up your .d.ts definition files.
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
]

export default rollupConfig
