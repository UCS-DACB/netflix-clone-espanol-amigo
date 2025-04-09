
import { Globe } from "lucide-react";

/**
 * Pie de página con enlaces y selector de idioma
 */
const Footer = () => {
  return (
    <footer className="bg-black text-[#adadad] py-12 border-t-8 border-[#232323]">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-sm">
            ¿Preguntas? Llama al <a href="tel:900822376" className="underline">900 822 376</a>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div>
            <ul className="text-sm space-y-3">
              <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:underline">Inversores</a></li>
              <li><a href="#" className="hover:underline">Formas de ver</a></li>
              <li><a href="#" className="hover:underline">Información corporativa</a></li>
              <li><a href="#" className="hover:underline">Solo en Netflix</a></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-3">
              <li><a href="#" className="hover:underline">Centro de ayuda</a></li>
              <li><a href="#" className="hover:underline">Empleo</a></li>
              <li><a href="#" className="hover:underline">Términos de uso</a></li>
              <li><a href="#" className="hover:underline">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-3">
              <li><a href="#" className="hover:underline">Cuenta</a></li>
              <li><a href="#" className="hover:underline">Canjear tarjetas regalo</a></li>
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Prueba de velocidad</a></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-3">
              <li><a href="#" className="hover:underline">Zona de prensa</a></li>
              <li><a href="#" className="hover:underline">Comprar tarjetas regalo</a></li>
              <li><a href="#" className="hover:underline">Preferencias de cookies</a></li>
              <li><a href="#" className="hover:underline">Avisos legales</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1 border rounded-md px-3 py-1">
            <Globe size={16} />
            <span className="text-sm">Español</span>
            <select className="bg-transparent text-sm appearance-none outline-none ml-1">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <p className="text-sm">Netflix España</p>
      </div>
    </footer>
  );
};

export default Footer;
