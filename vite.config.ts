import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimizeDeps: {
    include: ["react-native-web"],
  },
  server: {
    hmr: false,
  },
});
