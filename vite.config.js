import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const stylesPath = path.resolve(__dirname, "src/styles");

export default defineConfig(({ mode }) => {
  // const isProd = mode === "production";

  return {
    base: "/",
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@styles": stylesPath,
      },
    },
  };
});
