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
          if (id.includes("path/to/some-heavy-component")) {
            return "heavy-component";
          }
          if (id.includes("node_modules")) {
            if (id.includes("@thirdweb-dev")) {
              return "thirdweb-vendor";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
