
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      
      {/* Acceso directo al catálogo - Para desarrollo */}
      <div className="container mx-auto px-4 py-4 text-center">
        <Link to="/catalog">
          <Button className="bg-[#e50914] hover:bg-[#f40612] text-white text-lg py-6 px-8 rounded">
            Ver el catálogo (Demo)
          </Button>
        </Link>
      </div>
      
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
