import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@fortawesome/fontawesome-free-solid": path.resolve(
        __dirname,
        "node_modules/@fortawesome/free-solid-svg-icons"
      ),
      "@fortawesome/fontawesome-free-regular": path.resolve(
        __dirname,
        "node_modules/@fortawesome/free-regular-svg-icons"
      ),
      "@fortawesome/fontawesome-svg-core": path.resolve(
        __dirname,
        "node_modules/@fortawesome/fontawesome-svg-core"
      ),
    },
  },
});
