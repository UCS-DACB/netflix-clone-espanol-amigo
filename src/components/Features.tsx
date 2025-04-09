
/**
 * Componente de características de Netflix
 * Muestra las principales características del servicio
 */
const Features = () => {
  return (
    <section className="py-12 border-t-8 border-[#232323]">
      <div className="container mx-auto px-4">
        {/* TV Feature */}
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Disfruta en tu TV</h2>
            <p className="text-lg md:text-xl">
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
              alt="TV Netflix" 
              className="relative z-10 w-full"
            />
            <div className="absolute top-[20%] left-[13%] right-[13%] bottom-[10%] z-0">
              <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-8 border-[#232323] my-2"></div>

        {/* Mobile Feature */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Descarga tus series para verlas offline</h2>
            <p className="text-lg md:text-xl">
              Guarda tu contenido favorito y tendrás siempre algo para ver.
            </p>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <img 
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
              alt="Mobile Netflix" 
              className="relative z-10 w-full max-w-md"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-black border-2 border-gray-400 rounded-lg p-2 flex items-center gap-4 w-[60%]">
              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" 
                alt="Stranger Things" 
                className="h-20"
              />
              <div>
                <div className="font-bold">Stranger Things</div>
                <div className="text-blue-500 text-sm">Descargando...</div>
              </div>
              <div className="ml-auto">
                <div className="w-12 h-12 rounded-full border-2 border-l-transparent border-blue-500 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-8 border-[#232323] my-2"></div>

        {/* Devices Feature */}
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Disfruta donde quieras</h2>
            <p className="text-lg md:text-xl">
              Películas y series ilimitadas en tu teléfono, tablet, ordenador y TV.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" 
              alt="Devices Netflix" 
              className="relative z-10 w-full"
            />
            <div className="absolute top-[10%] left-[19%] right-[19%] bottom-[40%] z-0">
              <video autoPlay playsInline muted loop className="w-full h-full object-fill">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
