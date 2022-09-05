import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx  from '@vitejs/plugin-vue-jsx';
import DefineOptions from "unplugin-vue-define-options/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),DefineOptions()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/app.scss";',
      },
    },
  },
});
