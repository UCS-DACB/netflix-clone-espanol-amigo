
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Configuración de Vite para la aplicación
 * - Se configura la base URL para GitHub Pages
 * - Se añade soporte para rutas absolutas con @/
 * - Se configura el puerto y host para desarrollo local
 */
export default defineConfig(({ mode }) => ({
  // Configuramos la base URL para GitHub Pages
  // Si estamos en producción, usamos el nombre del repositorio como base
  // Si estamos en desarrollo, usamos la raíz
  base: mode === 'production' ? '/netflix-clone-espanol/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
