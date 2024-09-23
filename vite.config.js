import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components"], // Specify the directory where your components are located
      extensions: ["vue", "js"], // Include .js files if your components are in .js files
    }),
  ],
  build: {
    lib: {
      entry: "src/index.js", // Entry file for your library
      name: "SharedComponents", // Global variable name for UMD/IIFE build
      fileName: (format) => `shared-components.${format}.js`, // Output file name pattern
    },
    rollupOptions: {
      // Ensure to externalize dependencies that shouldn't be bundled
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});