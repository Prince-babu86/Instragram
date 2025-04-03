import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Instragram',
        short_name: 'Instragram',
        description: 'An Instagram clone built with React',
        theme_color: '#000000',
        icons: [
          {
            src: 'https://i.pinimg.com/736x/0b/da/8d/0bda8d7b305ace345b9dbfcfeff77b41.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://i.pinimg.com/736x/0b/da/8d/0bda8d7b305ace345b9dbfcfeff77b41.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server:{
    host:true,
    port:"5173"
  }
})
