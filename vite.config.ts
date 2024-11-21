import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 8080, // Configura el puerto a 8080
    host: '0.0.0.0', // Permite que la app sea accesible desde cualquier dirección IP
  },
});
