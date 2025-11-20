import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),

        // 👇 SCSS aliases for DEV vs PROD
        "@styles": isProd
          ? path.resolve(__dirname, "src/styles")
          : path.resolve(__dirname, "src/styles"),

        // 👇 Image alias for DEV vs PROD
        "@images": isProd
          ? path.resolve(__dirname, "src/assets/prod")
          : path.resolve(__dirname, "src/assets/dev"),
      },
    },
  };
});
