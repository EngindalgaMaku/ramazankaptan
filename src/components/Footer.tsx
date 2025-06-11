import React from 'react';
import { Anchor, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Turlarımız', href: '#turlarimiz' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'İletişim', href: '#iletisim' }
  ];

  const tourTypes = [
    'Günlük Mavi Tur',
    'Romantik Gün Batımı',
    'Balık Avı Turu',
    'Özel Grup Turu'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full">
                <Anchor size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ramazan Kaptan</h3>
                <p className="text-gray-400">Adrasan Tekne Turları</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              15 yılı aşkın deneyimimizle Adrasan'ın kristal berraklığındaki sularında 
              unutulmaz tekne turları düzenliyoruz. Güvenli ve keyifli yolculuklar için 
              bizimle iletişime geçin.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/905393601997"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Tur Seçenekleri</h4>
            <ul className="space-y-3">
              {tourTypes.map((tour, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#turlarimiz')}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {tour}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <a
                href="tel:+905393601997"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <Phone size={18} className="group-hover:text-cyan-400" />
                <span>+90 539 360 19 97</span>
              </a>
              <a
                href="mailto:info@ramazankaptan.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail size={18} className="group-hover:text-cyan-400" />
                <span>info@ramazankaptan.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=Adrasan,Kumluca,Antalya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <MapPin size={18} className="group-hover:text-cyan-400 mt-1" />
                <span className="leading-relaxed">
                  Adrasan Mahallesi, Sahil Yolu No:15<br />
                  Kumluca/Antalya
                </span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/20">
              <h5 className="font-semibold text-cyan-400 mb-2">Çalışma Saatleri</h5>
              <p className="text-gray-300 text-sm">
                Pazartesi - Pazar: 08:00 - 20:00<br />
                Rezervasyon: 24/7 Açık
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Özel Fırsatlardan Haberdar Olun</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Erken rezervasyon indirimleri ve özel tur fırsatları için e-posta adresinizi bırakın.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-r-lg transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ramazan Kaptan Tekne Turları. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for the Mediterranean</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;