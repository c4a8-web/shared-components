import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.esm-bundler.js', // Alias to use the Vue build with the template compiler
  //   },
  // },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'], // Specify the directory where your components are located
      extensions: ['vue', 'js'], // Include .js files if your components are in .js files
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es'],
      name: 'SharedComponents', // Global variable name for UMD/IIFE build
      // fileName: (format) => `shared-components.${format}.js`, // Output file name pattern
    },
    rollupOptions: {
      // Ensure to externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue',
        },
      },
    },
  },
});
