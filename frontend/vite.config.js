import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // tells Vercel where to find your production build
  },
  server: {
    host: true,     // fixes "use --host to expose" log message
    port: 5173,     // optional, ensures consistent dev behavior
  },
});
