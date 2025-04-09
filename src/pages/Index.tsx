
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

/**
 * Página de inicio de Netflix
 * Contiene los componentes principales de la landing page
 */
const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Encabezado con navegación */}
      <Navbar />
      
      {/* Sección Hero con banner principal */}
      <Hero />
      
      {/* Características de Netflix */}
      <Features />
      
      {/* Preguntas frecuentes */}
      <Faq />
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Index;
