
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, ChevronDown, Info, Play } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/**
 * Página principal de catálogo de Netflix
 * Muestra películas y series organizadas por categorías con carruseles mejorados
 */
const Catalog = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Categorías con sus respectivos contenidos
  const categories = [
    {
      id: "popular",
      title: "Populares en Netflix",
      items: [
        { id: "p1", title: "La casa de papel", img: "https://picsum.photos/seed/11/450/253" },
        { id: "p2", title: "Stranger Things", img: "https://picsum.photos/seed/12/450/253" },
        { id: "p3", title: "El juego del calamar", img: "https://picsum.photos/seed/13/450/253" },
        { id: "p4", title: "Ozark", img: "https://picsum.photos/seed/14/450/253" },
        { id: "p5", title: "Peaky Blinders", img: "https://picsum.photos/seed/15/450/253" },
        { id: "p6", title: "Breaking Bad", img: "https://picsum.photos/seed/16/450/253" },
        { id: "p7", title: "The Crown", img: "https://picsum.photos/seed/17/450/253" },
        { id: "p8", title: "Narcos", img: "https://picsum.photos/seed/18/450/253" },
      ]
    },
    {
      id: "trending",
      title: "Tendencias",
      items: [
        { id: "t1", title: "Wednesday", img: "https://picsum.photos/seed/21/450/253" },
        { id: "t2", title: "You", img: "https://picsum.photos/seed/22/450/253" },
        { id: "t3", title: "Bridgerton", img: "https://picsum.photos/seed/23/450/253" },
        { id: "t4", title: "Élite", img: "https://picsum.photos/seed/24/450/253" },
        { id: "t5", title: "Cobra Kai", img: "https://picsum.photos/seed/25/450/253" },
        { id: "t6", title: "Sex Education", img: "https://picsum.photos/seed/26/450/253" },
        { id: "t7", title: "The Witcher", img: "https://picsum.photos/seed/27/450/253" },
        { id: "t8", title: "Dark", img: "https://picsum.photos/seed/28/450/253" },
      ]
    },
    {
      id: "spanish",
      title: "Series españolas",
      items: [
        { id: "s1", title: "Élite", img: "https://picsum.photos/seed/31/450/253" },
        { id: "s2", title: "La casa de papel", img: "https://picsum.photos/seed/32/450/253" },
        { id: "s3", title: "Vis a vis", img: "https://picsum.photos/seed/33/450/253" },
        { id: "s4", title: "El Ministerio del Tiempo", img: "https://picsum.photos/seed/34/450/253" },
        { id: "s5", title: "Las chicas del cable", img: "https://picsum.photos/seed/35/450/253" },
        { id: "s6", title: "Paquita Salas", img: "https://picsum.photos/seed/36/450/253" },
        { id: "s7", title: "El vecino", img: "https://picsum.photos/seed/37/450/253" },
        { id: "s8", title: "Alta mar", img: "https://picsum.photos/seed/38/450/253" },
      ]
    },
    {
      id: "action",
      title: "Películas de acción",
      items: [
        { id: "a1", title: "Extraction", img: "https://picsum.photos/seed/41/450/253" },
        { id: "a2", title: "6 Underground", img: "https://picsum.photos/seed/42/450/253" },
        { id: "a3", title: "The Old Guard", img: "https://picsum.photos/seed/43/450/253" },
        { id: "a4", title: "Project Power", img: "https://picsum.photos/seed/44/450/253" },
        { id: "a5", title: "Army of the Dead", img: "https://picsum.photos/seed/45/450/253" },
        { id: "a6", title: "Red Notice", img: "https://picsum.photos/seed/46/450/253" },
        { id: "a7", title: "The Gray Man", img: "https://picsum.photos/seed/47/450/253" },
        { id: "a8", title: "Triple Frontier", img: "https://picsum.photos/seed/48/450/253" },
      ]
    },
    {
      id: "docs",
      title: "Documentales impactantes",
      items: [
        { id: "d1", title: "Tiger King", img: "https://picsum.photos/seed/51/450/253" },
        { id: "d2", title: "Making a Murderer", img: "https://picsum.photos/seed/52/450/253" },
        { id: "d3", title: "The Social Dilemma", img: "https://picsum.photos/seed/53/450/253" },
        { id: "d4", title: "Our Planet", img: "https://picsum.photos/seed/54/450/253" },
        { id: "d5", title: "Chef's Table", img: "https://picsum.photos/seed/55/450/253" },
        { id: "d6", title: "Formula 1: Drive to Survive", img: "https://picsum.photos/seed/56/450/253" },
        { id: "d7", title: "The Last Dance", img: "https://picsum.photos/seed/57/450/253" },
        { id: "d8", title: "Don't F**k With Cats", img: "https://picsum.photos/seed/58/450/253" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Barra de navegación del catálogo */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo y navegación principal */}
          <div className="flex items-center gap-6">
            <Link to="/catalog" className="flex-shrink-0">
              <svg viewBox="0 0 111 30" className="h-7 w-20 fill-[#e50914]" aria-hidden="true" focusable="false">
                <g id="netflix-logo">
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2499766 C43.7810479,26.2499766 42.1876465,26.2499766 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex gap-4">
                <li><Link to="/catalog" className="text-sm font-medium hover:text-gray-300">Inicio</Link></li>
                <li><Link to="/catalog?type=series" className="text-sm hover:text-gray-300">Series</Link></li>
                <li><Link to="/catalog?type=movies" className="text-sm hover:text-gray-300">Películas</Link></li>
                <li><Link to="/catalog?type=new" className="text-sm hover:text-gray-300">Novedades populares</Link></li>
                <li><Link to="/catalog?type=mylist" className="text-sm hover:text-gray-300">Mi lista</Link></li>
                <li><Link to="/catalog?type=language" className="text-sm hover:text-gray-300">Explorar por idiomas</Link></li>
              </ul>
            </nav>
          </div>

          {/* Iconos de acción */}
          <div className="flex items-center gap-4">
            <button className="p-1">
              <Search size={20} />
            </button>
            <button className="p-1">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-1">
              <img 
                src="https://occ-0-5673-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrOQlB8MJfPWlb9hamAjWQW_JUoMen-auf-JT-duXx6g_E92xN2ufHsQ23zzLAzGNtnOdTnFBlVMvuOcAUyPQ7E.png?r=b39" 
                alt="Perfil" 
                className="w-8 h-8 rounded"
              />
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero con película destacada */}
      <section className="relative pt-16 pb-4">
        <div className="absolute inset-0 bg-[url('https://occ-0-5673-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608')] bg-cover bg-center h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col h-[80vh] justify-end">
          <div className="max-w-xl mb-8">
            <img 
              src="https://occ-0-5673-358.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_9-TPe9IeeFDb1J9F-J3lEL6WHeM9jCRhkv7uw6lrJ9YFbNOoWogbNmGqxDcK3P-EjgYgJnJQQQl0Jrky5GhsKbmYbvVK.png?r=50a" 
              alt="Berlín" 
              className="w-72 mb-4"
            />
            <p className="text-lg mb-4">
              Berlín vuelve a las andadas en esta precuela de "La casa de papel" sobre los atracos más extraordinarios del carismático ladrón y su banda.
            </p>
            <div className="flex gap-3">
              <button className="bg-white text-black py-2 px-6 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5" />
                Reproducir
              </button>
              <button className="bg-gray-700/80 text-white py-2 px-6 rounded flex items-center gap-2 hover:bg-gray-600/80 transition-colors">
                <Info className="w-5 h-5" />
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de películas/series con carruseles mejorados */}
      <div className="relative z-10 mb-12 -mt-32 px-4">
        {categories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="text-xl font-bold mb-4">{category.title}</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {category.items.map((item) => (
                  <CarouselItem 
                    key={item.id} 
                    className="pl-2 md:pl-4 basis-[250px] md:basis-[300px] lg:basis-1/5"
                  >
                    <div 
                      className={cn(
                        "relative overflow-hidden rounded-md transition-all duration-300",
                        hoveredItem === item.id ? "scale-110 z-10 shadow-xl" : "scale-100"
                      )}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full aspect-video object-cover transition-transform duration-500"
                      />
                      {hoveredItem === item.id && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 transition-opacity duration-300">
                          <div>
                            <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                            <div className="flex gap-2">
                              <button className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors">
                                <Play className="w-3 h-3" />
                              </button>
                              <button className="border border-white/40 p-1.5 rounded-full hover:border-white transition-colors">
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 bg-black/50 hover:bg-black/80" />
              <CarouselNext className="right-1 bg-black/50 hover:bg-black/80" />
            </Carousel>
          </section>
        ))}
      </div>

      {/* Pie de página */}
      <footer className="py-8 px-4 bg-black text-[#adadad] mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Audio y subtítulos</a></li>
                <li><a href="#" className="hover:underline">Centro de ayuda</a></li>
                <li><a href="#" className="hover:underline">Tarjetas regalo</a></li>
                <li><a href="#" className="hover:underline">Prensa</a></li>
              </ul>
            </div>
            <div>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Audiodescripción</a></li>
                <li><a href="#" className="hover:underline">Relaciones con inversores</a></li>
                <li><a href="#" className="hover:underline">Términos de uso</a></li>
                <li><a href="#" className="hover:underline">Información legal</a></li>
              </ul>
            </div>
            <div>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Empleo</a></li>
                <li><a href="#" className="hover:underline">Privacidad</a></li>
                <li><a href="#" className="hover:underline">Contáctanos</a></li>
                <li><a href="#" className="hover:underline">Solo en Netflix</a></li>
              </ul>
            </div>
            <div>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Código de descuentos</a></li>
                <li><a href="#" className="hover:underline">Preferencias de cookies</a></li>
                <li><a href="#" className="hover:underline">Avisos legales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs">&copy; 2025 Netflix España</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componente Plus para el botón de agregar a mi lista
const Plus = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 4V20M4 12H20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default Catalog;
