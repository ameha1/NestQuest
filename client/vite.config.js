import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import nodePolyfills from 'rollup-plugin-polyfill-node';

// export default defineConfig({
//   plugins: [
//     nodePolyfills({
//       include: ['events']
//     })
//   ]
// });
