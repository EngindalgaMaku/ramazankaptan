import React from 'react';
import { Clock, Users, MapPin, Star, Camera, Fish } from 'lucide-react';

const Tours: React.FC = () => {
  const tours = [
    {
      title: 'Günlük Mavi Tur',
      description: 'Adrasan\'ın en güzel koylarını keşfedin. Yüzme ve snorkeling dahil.',
      duration: '8 saat',
      capacity: '12 kişi',
      price: '€45',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      features: ['Öğle yemeği dahil', 'Snorkeling ekipmanı', 'Fotoğraf çekimi', 'Rehberli tur'],
      highlights: ['Suluada Adası', 'Kaş Limanı', 'Mavi Mağara']
    },
    {
      title: 'Romantik Gün Batımı',
      description: 'Sevgilinizle unutulmaz bir gün batımı deneyimi yaşayın.',
      duration: '4 saat',
      capacity: '8 kişi',
      price: '€65',
      image: 'https://images.pexels.com/photos/1001604/pexels-photo-1001604.jpeg',
      features: ['Aperatif ikramı', 'Canlı müzik', 'Romantik dekorasyon', 'Özel fotoğraf'],
      highlights: ['Gün batımı manzarası', 'Sakin koylar', 'Özel servis']
    },
    {
      title: 'Balık Avı Turu',
      description: 'Deneyimli rehberler eşliğinde geleneksel balık avı deneyimi.',
      duration: '6 saat',
      capacity: '10 kişi',
      price: '€55',
      image: 'https://images.pexels.com/photos/1001677/pexels-photo-1001677.jpeg',
      features: ['Av ekipmanları', 'Kahvaltı dahil', 'Balık pişirme', 'Teknik eğitim'],
      highlights: ['Derin deniz avı', 'Geleneksel yöntemler', 'Taze balık yemeği']
    },
    {
      title: 'Özel Grup Turu',
      description: 'Aileniz veya arkadaş grubunuz için özel olarak düzenlenmiş tur.',
      duration: 'Flexible',
      capacity: '20 kişi',
      price: 'İletişim',
      image: 'https://images.pexels.com/photos/1001686/pexels-photo-1001686.jpeg',
      features: ['Özel rota', 'Catering seçeneği', 'Müzik sistemi', 'Esnek program'],
      highlights: ['Kişiye özel rota', 'Grup aktiviteleri', 'Kutlama organizasyonu']
    }
  ];

  return (
    <section id="turlarimiz" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tur Paketlerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyacınıza ve bütçenize uygun tur seçeneklerimizle Akdeniz'in büyüsüne kapılın.
            Her tur özenle planlanmış ve unutulmaz anılar biriktirmeniz için tasarlanmıştır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  {tour.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{tour.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock size={18} className="text-cyan-500" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users size={18} className="text-cyan-500" />
                    <span className="font-medium">Max {tour.capacity}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={18} />
                    Tur Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Dahil Olan Hizmetler</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Rezervasyon Yap
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Özel İstekleriniz İçin
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Listelenen turlar dışında özel istekleriniz için bizimle iletişime geçin. 
            Doğum günü, evlilik teklifi, kurumsal etkinlikler için özel paketler hazırlıyoruz.
          </p>
          <button
            onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Özel Teklif Al
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;