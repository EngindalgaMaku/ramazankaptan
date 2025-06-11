import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'bg-cyan-500 text-white' : 'bg-white/20 text-white backdrop-blur-sm'
            }`}>
              <Anchor size={24} />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Ramazan Kaptan
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Adrasan Tekne Turları
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Ana Sayfa', 'Hakkımızda', 'Turlarımız', 'Galeri', 'Yorumlar', 'İletişim'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace('ı', 'i'))}
                className={`font-medium transition-colors hover:text-cyan-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-3">
              <a href="tel:+905551234567" className={`p-2 rounded-full transition-colors hover:bg-cyan-500 hover:text-white ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <Phone size={20} />
              </a>
              <a href="mailto:info@ramazankaptan.com" className={`p-2 rounded-full transition-colors hover:bg-cyan-500 hover:text-white ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <Mail size={20} />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="flex flex-col py-4">
              {['Ana Sayfa', 'Hakkımızda', 'Turlarımız', 'Galeri', 'Yorumlar', 'İletişim'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace('ı', 'i'))}
                  className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
                <a href="tel:+905551234567" className="flex items-center space-x-2 text-cyan-600">
                  <Phone size={20} />
                  <span>Ara</span>
                </a>
                <a href="mailto:info@ramazankaptan.com" className="flex items-center space-x-2 text-cyan-600">
                  <Mail size={20} />
                  <span>E-posta</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;