import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@service": resolve(__dirname, "src/service"),
      "@store": resolve(__dirname, "src/store"),
      "@types": resolve(__dirname, "src/types"),
      "@": resolve(__dirname, "src"),
    },
  },
});
