import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/root/mixins.scss"; @import "./src/styles/root/global.scss";`,
      },
    },
  },
  plugins: [react()],
});
