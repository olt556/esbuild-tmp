const { argv } = require('process')
const { build } = require('esbuild')
const path = require('path')

process.env.NODE_ENV = argv[2]

const options = {
  entryPoints: [path.resolve(__dirname, 'src/Index.tsx')],
  minify: process.env.NODE_ENV === 'production',
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: path.resolve(__dirname, 'dist'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json')
}

build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})