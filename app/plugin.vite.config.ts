import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/plugin/main.ts"),
      output: {
        dir: path.resolve(__dirname, "./dist-plugin"),
        entryFileNames: "main.js",
      },
    },
  },
});
