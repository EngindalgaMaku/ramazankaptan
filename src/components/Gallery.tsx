import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/images/620aebe5-40f6-45d5-bba5-dcf29d90310b.jpg',
      alt: 'Adrasan Tekne Turu - Mavi Su',
      category: 'Doğa'
    },
    {
      src: '/images/2f7fcef3-41eb-480a-938a-e5c0bbefd421.jpg',
      alt: 'Gün Batımı Turu',
      category: 'Gün Batımı'
    },
    {
      src: '/images/97481bba-de03-4193-a453-cbd490c7b485.jpg',
      alt: 'Balık Avı Deneyimi',
      category: 'Aktivite'
    },
    {
      src: '/images/9cf06362-804e-45ac-ab9c-128b7543445c.jpg',
      alt: 'Grup Turları',
      category: 'Grup'
    },
    {
      src: '/images/c0ed67c7-c7eb-47d2-b78a-af3844fc2558.jpg',
      alt: 'Kristal Berrak Su',
      category: 'Doğa'
    },
    {
      src: '/images/52ee6f62-cc0e-4337-b574-d5d70662fabd.jpg',
      alt: 'Deniz Sporları',
      category: 'Aktivite'
    },
    {
      src: '/images/b9a57aa0-9eb0-43c0-9e74-8ed1c0a99513.jpg',
      alt: 'Sahil Manzarası',
      category: 'Doğa'
    },
    {
      src: '/images/575da10d-1467-4680-b84c-458eafac8c3e.jpg',
      alt: 'Romantik Anlar',
      category: 'Gün Batımı'
    },
    {
      src: '/images/b85853e2-d4f1-4805-80cb-3d6cf0035685.jpg',
      alt: 'Aile Keyfi',
      category: 'Grup'
    }
  ];

  const categories = ['Tümü', 'Doğa', 'Aktivite', 'Grup', 'Gün Batımı'];
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredImages = activeCategory === 'Tümü' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Foto Galeri
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Misafirlerimizin yaşadığı unutulmaz anları ve Adrasan'ın eşsiz güzelliklerini 
            fotoğraflarımızla keşfedin.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Camera className="text-white" size={32} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
                <span className="text-sm text-cyan-300">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
            <div className="text-gray-600">Mutlu Misafir</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
            <div className="text-gray-600">Yıl Deneyim</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">100+</div>
            <div className="text-gray-600">Başarılı Tur</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">25</div>
            <div className="text-gray-600">Güzel Koyu</div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">{filteredImages[selectedImage].alt}</h3>
                <p className="text-cyan-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;