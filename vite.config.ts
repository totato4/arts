import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@styles": "/src/styles", // Простая строка вместо path.resolve
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@styles/mixins" as *;
        @use "@styles/variables" as *;
        `,
      },
    },
  },
});
