import React from 'react';
import { ChevronDown, Waves, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('hakkimizda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/620aebe5-40f6-45d5-bba5-dcf29d90310b.jpg"
          alt="Adrasan Tekne Turu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-cyan-900/40 to-blue-800/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
            <Waves size={48} className="text-cyan-300" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Akdeniz'in
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block">
            Mavi Dünyası
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Deneyimli Kaptan Ramazan eşliğinde unutulmaz tekne turları. 
          Adrasan'ın kristal berraklığındaki sularında mükemmel bir gün geçirin.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <MapPin size={20} className="text-cyan-300" />
            <span className="font-medium">Adrasan, Antalya</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Star size={20} className="text-yellow-400" />
            <span className="font-medium">15+ Yıl Deneyim</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Hemen Rezervasyon Yap
          </button>
          <button
            onClick={() => document.getElementById('turlarimiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            Turları İncele
          </button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;