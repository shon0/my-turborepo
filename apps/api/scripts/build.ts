import esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['./server.ts'],
  outdir: './dist',
  platform: 'node',
  format: 'esm',
  target: 'es2020',
})
