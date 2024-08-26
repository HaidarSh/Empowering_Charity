import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Empowering_Charity/",
  optimizeDeps: {
    include: ["ethers"],
  },
  build: {
  //   // rollupOptions: {
  //   //   output: {
  //   //     manualChunks(id) {
  //   //       if (id.includes("node_modules")) {
  //   //         if (id.includes("@thirdweb-dev")) {
  //   //           return "thirdweb-vendor";
  //   //         }
  //   //         return "vendor";
  //   //       }
  //   //     },
  //   //   },
  //   // },
    chunkSizeWarningLimit: 15000,
  //   // minify: false, 
  //   // terserOptions: {}, 
  //   // gzipSize: false 
  },
});
