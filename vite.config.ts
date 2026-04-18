import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: false,
    }),
    tanstackStart({
      deployment: "netlify",
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
