
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/**
 * Componente Hero con la imagen principal y el formulario de registro
 * Incluye el título, subtítulo y campo para email
 */
const Hero = () => {
  return (
    <section className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/6de58cc5-c02c-45d0-a1e2-def9a7b8af89/ES-es-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 py-28 md:py-40 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Películas y series ilimitadas y mucho más
          </h1>
          <p className="text-xl md:text-2xl mb-5">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <p className="text-lg mb-5">
            ¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.
          </p>

          {/* Formulario de registro */}
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <input 
              type="email" 
              placeholder="Dirección de correo" 
              className="px-4 py-3 rounded bg-black/40 border border-gray-600 text-white flex-grow md:max-w-80"
            />
            <Button className="bg-[#e50914] hover:bg-[#f40612] text-white text-lg py-6 px-5 rounded">
              Comenzar
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
