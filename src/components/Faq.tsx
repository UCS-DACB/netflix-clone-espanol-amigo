
import { useState } from "react";
import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Preguntas frecuentes
const faqs = [
  {
    question: "¿Qué es Netflix?",
    answer: "Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet. Puedes ver todo el contenido que quieras, cuando quieras y sin un solo anuncio por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!"
  },
  {
    question: "¿Cuánto cuesta Netflix?",
    answer: "Disfruta de Netflix en tu smartphone, tablet, smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Los planes oscilan entre 5,49 € y 17,99 € al mes. Sin cargos adicionales ni contratos."
  },
  {
    question: "¿Dónde puedo ver Netflix?",
    answer: "Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a Internet que ofrezca la aplicación de Netflix, como smart TV, smartphones, tablets, reproductores multimedia de streaming y consolas de juegos. También puedes descargar tus series favoritas con la aplicación de iOS, Android o Windows 10. Utiliza las descargas para ver títulos dondequiera que vayas y cuando no dispongas de conexión a Internet. Netflix te acompaña vayas donde vayas."
  },
  {
    question: "¿Cómo cancelo?",
    answer: "Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: crea y cancela tu cuenta cuando quieras."
  },
  {
    question: "¿Qué puedo ver en Netflix?",
    answer: "Netflix dispone de una amplia biblioteca de películas, documentales, series, anime, originales premiados de Netflix y mucho más. Ve todo el contenido que quieras, cuando quieras."
  }
];

/**
 * Componente de preguntas frecuentes
 * Permite expandir/contraer cada pregunta para mostrar la respuesta
 */
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-12 border-t-8 border-[#232323]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Preguntas frecuentes
        </h2>

        <div className="max-w-3xl mx-auto mb-10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-2 bg-[#2d2d2d] hover:bg-[#414141] transition-colors"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl md:text-2xl">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-lg border-t border-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
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

export default Faq;
