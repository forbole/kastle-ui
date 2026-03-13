import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "@": path.resolve(__dirname, "src"),
      "@/assets": path.resolve(__dirname, "assets"),
    },
  },
  optimizeDeps: {
    include: ["react-native-web"],
  },
  server: {
    hmr: false,
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
});
