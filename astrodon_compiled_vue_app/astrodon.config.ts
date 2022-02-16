import type { AppOptions } from '../../mod.ts'

export default <AppOptions> {
  name: 'vue_astrodon_example',
  version: '0.0.2',
  build: {
    entry: './mod.ts',
    out: './dist',
    assets: './renderer/dist',
    
  },
}