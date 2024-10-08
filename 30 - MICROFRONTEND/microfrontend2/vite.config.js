import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "characterList",
      filename: "remoteEntry.js",
      exposes: {
        "./CharacterList": "./src/components/CharacterList.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
})
