import type { AppOptions } from "https://deno.land/x/astrodon@0.1.0-alpha.2/mod.ts";
// 'https://deno.land/std/path/mod.ts';

export default <AppOptions> {
  name: 'vue_astrodon_example',
  version: '0.0.2',
  build: {
    entry: './mod.ts',
    out: './dist',
    assets: './renderer/dist',
    
  },
}