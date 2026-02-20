import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/rest-countries-dashboard/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        details: resolve(__dirname, "details.html"),
      },
    },
  },
});
