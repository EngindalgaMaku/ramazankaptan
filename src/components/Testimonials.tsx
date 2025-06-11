import React, { useState, useEffect } from 'react';
import { Star, Quote, User, Calendar, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guestBookEntries, setGuestBookEntries] = useState([
    {
      name: 'Ahmet Yılmaz',
      location: 'İstanbul',
      date: '2024-08-15',
      rating: 5,
      comment: 'Harika bir deneyimdi! Kaptan Ramazan çok deneyimli ve güler yüzlü. Adrasan\'ın en güzel koylarını gezdik. Kesinlikle tekrar geleceğim.',
      tour: 'Günlük Mavi Tur'
    },
    {
      name: 'Elif Kaya',
      location: 'Ankara',
      date: '2024-08-10',
      rating: 5,
      comment: 'Romantik gün batımı turu mükemmeldi. Eşimle unutulmaz bir gün geçirdik. Her detay düşünülmüş, servis harikaydı.',
      tour: 'Romantik Gün Batımı'
    },
    {
      name: 'Mehmet Özkan',
      location: 'İzmir',
      date: '2024-08-05',
      rating: 5,
      comment: 'Arkadaşlarımla harika vakit geçirdik. Balık avı çok eğlenceliydi ve avladığımız balıkların pişirilmesi muhteşemdi. Teşekkürler!',
      tour: 'Balık Avı Turu'
    },
    {
      name: 'Ayşe Demir',
      location: 'Bursa',
      date: '2024-07-28',
      rating: 5,
      comment: 'Aile olarak katıldığımız turda herkes çok memnun kaldı. Çocuklar için güvenli ve eğlenceli aktiviteler vardı. Harika bir gün!',
      tour: 'Özel Grup Turu'
    },
    {
      name: 'Can Arslan',
      location: 'Antalya',
      date: '2024-07-20',
      rating: 5,
      comment: 'Yerel olarak yaşadığım halde Adrasan\'ı hiç bu kadar güzel görmemiştim. Profesyonel rehberlik ve mükemmel organizasyon.',
      tour: 'Günlük Mavi Tur'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    location: '',
    comment: '',
    tour: 'Günlük Mavi Tur',
    rating: 5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % guestBookEntries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [guestBookEntries.length]);

  const handleSubmitGuestBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.name && newEntry.location && newEntry.comment) {
      const entry = {
        ...newEntry,
        date: new Date().toISOString().split('T')[0]
      };
      setGuestBookEntries([entry, ...guestBookEntries]);
      setNewEntry({
        name: '',
        location: '',
        comment: '',
        tour: 'Günlük Mavi Tur',
        rating: 5
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="yorumlar" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Misafir Yorumları
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bizimle unutulmaz anılar biriktiren misafirlerimizin deneyimlerini okuyun 
            ve siz de görüşlerinizi paylaşın.
          </p>
        </div>

        {/* Featured Testimonials Carousel */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mx-auto max-w-4xl">
            <Quote className="text-cyan-500 mb-4" size={48} />
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{guestBookEntries[currentIndex].comment}"
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(guestBookEntries[currentIndex].rating)}
              </div>
              <div className="font-semibold text-gray-800 text-lg">
                {guestBookEntries[currentIndex].name}
              </div>
              <div className="text-gray-600 flex items-center justify-center space-x-4 mt-2">
                <span className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {guestBookEntries[currentIndex].location}
                </span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(guestBookEntries[currentIndex].date).toLocaleDateString('tr-TR')}
                </span>
              </div>
              <div className="text-cyan-600 text-sm mt-1">
                {guestBookEntries[currentIndex].tour}
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {guestBookEntries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* All Reviews */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <User className="mr-3 text-cyan-500" />
              Ziyaretçi Defteri
            </h3>
            <div className="space-y-6 max-h-96 overflow-y-auto pr-4">
              {guestBookEntries.map((entry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">{entry.name}</h4>
                      <div className="text-sm text-gray-600 flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{entry.location}</span>
                        <Calendar size={14} className="ml-2" />
                        <span>{new Date(entry.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(entry.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{entry.comment}</p>
                  <div className="text-xs text-cyan-600 font-medium">{entry.tour}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Book Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Deneyiminizi Paylaşın
            </h3>
            <form onSubmit={handleSubmitGuestBook} className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEntry.name}
                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şehir *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEntry.location}
                    onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Katıldığınız Tur
                </label>
                <select
                  value={newEntry.tour}
                  onChange={(e) => setNewEntry({ ...newEntry, tour: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="Günlük Mavi Tur">Günlük Mavi Tur</option>
                  <option value="Romantik Gün Batımı">Romantik Gün Batımı</option>
                  <option value="Balık Avı Turu">Balık Avı Turu</option>
                  <option value="Özel Grup Turu">Özel Grup Turu</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Değerlendirme
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewEntry({ ...newEntry, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        size={24}
                        className={star <= newEntry.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yorumunuz *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newEntry.comment}
                  onChange={(e) => setNewEntry({ ...newEntry, comment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Deneyiminizi bizimle paylaşın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Yorumu Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;