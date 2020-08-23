const { argv } = require('process')
const { build } = require('esbuild')

process.env.NODE_ENV = argv[2]

const options = {
  entryPoints: ['./src/Index.tsx'],
  minify: process.env.NODE_ENV === 'production',
  bundle: true,
  outdir: './dist',
  tsconfig: './tsconfig.json'
}

build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})