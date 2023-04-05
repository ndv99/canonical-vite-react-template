import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from "unplugin-auto-import/vite";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: "./.env" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    AutoImport({
      imports: ["react", "react-router-dom"],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  server: { port: Number(process.env.VITE_UI_PORT) },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
})
