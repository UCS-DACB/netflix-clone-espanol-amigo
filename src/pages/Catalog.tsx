
import React from "react";
import { Link } from "react-router-dom";
import { Bell, Search, ChevronDown } from "lucide-react";

/**
 * Página principal de catálogo de Netflix
 * Muestra películas y series organizadas por categorías
 */
const Catalog = () => {
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
      <section className="relative pt-12 pb-4">
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
              <button className="bg-white text-black py-2 px-6 rounded flex items-center gap-2 hover:bg-gray-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                </svg>
                Reproducir
              </button>
              <button className="bg-gray-700/80 text-white py-2 px-6 rounded flex items-center gap-2 hover:bg-gray-600/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                </svg>
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de películas/series */}
      <div className="relative z-10 mb-12 -mt-32">
        {/* Fila 1: Populares en Netflix */}
        <section className="mb-8 px-4">
          <h2 className="text-xl font-bold mb-2">Populares en Netflix</h2>
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`popular-${item}`} className="flex-shrink-0 w-[250px] group">
                <div className="relative rounded overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/${item + 10}/250/141`}
                    alt={`Popular ${item}`}
                    className="w-full h-[141px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fila 2: Tendencias */}
        <section className="mb-8 px-4">
          <h2 className="text-xl font-bold mb-2">Tendencias</h2>
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`trending-${item}`} className="flex-shrink-0 w-[250px] group">
                <div className="relative rounded overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/${item + 20}/250/141`}
                    alt={`Trending ${item}`}
                    className="w-full h-[141px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fila 3: Series */}
        <section className="mb-8 px-4">
          <h2 className="text-xl font-bold mb-2">Series españolas</h2>
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`series-${item}`} className="flex-shrink-0 w-[250px] group">
                <div className="relative rounded overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/${item + 30}/250/141`}
                    alt={`Series ${item}`}
                    className="w-full h-[141px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fila 4: Películas */}
        <section className="mb-8 px-4">
          <h2 className="text-xl font-bold mb-2">Películas de acción</h2>
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`movies-${item}`} className="flex-shrink-0 w-[250px] group">
                <div className="relative rounded overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/${item + 40}/250/141`}
                    alt={`Movie ${item}`}
                    className="w-full h-[141px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fila 5: Documentales */}
        <section className="mb-8 px-4">
          <h2 className="text-xl font-bold mb-2">Documentales impactantes</h2>
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`docs-${item}`} className="flex-shrink-0 w-[250px] group">
                <div className="relative rounded overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/${item + 50}/250/141`}
                    alt={`Documentary ${item}`}
                    className="w-full h-[141px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
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

export default Catalog;
