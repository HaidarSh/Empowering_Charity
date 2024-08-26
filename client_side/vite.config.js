import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Empowering_Charity/",
  optimizeDeps: {
    include: ["ethers"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("path/to/some-heavy-component")) {
            return "heavy-component";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
