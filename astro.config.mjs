// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// import vercel from '@astrojs/vercel';

// export default defineConfig({
//   output: 'server',
//   adapter: vercel(),
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // <--- Cambiado

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone', // <--- Esto le dice a Astro que cree un servidor autónomo
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});