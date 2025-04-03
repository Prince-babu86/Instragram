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
            src: 'https://static.cdninstagram.com/rsrc.php/v4/yx/r/H1l_HHqi4p6.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://static.cdninstagram.com/rsrc.php/v4/yx/r/H1l_HHqi4p6.png',
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
