import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Empowering_Charity/",
  optimizeDeps: {
    include: ["ethers"],
  },
  build: {
    chunkSizeWarningLimit: 15000,

  },
});
