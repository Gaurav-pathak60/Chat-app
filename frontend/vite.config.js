import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true // Clear the output directory before building
  },
  server: {
    // Serve files from the public directory
    fs: {
      allow: ['..'] // Allow access to the public directory
    }
  }
});
