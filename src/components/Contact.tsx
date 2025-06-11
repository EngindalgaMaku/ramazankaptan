import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: 'Günlük Mavi Tur',
    date: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourType: 'Günlük Mavi Tur',
      date: '',
      guests: '2',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 539 360 19 97',
      link: 'tel:+905393601997'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+90 539 360 19 97',
      link: 'https://wa.me/905393601997'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@ramazankaptan.com',
      link: 'mailto:info@ramazankaptan.com'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Adrasan Mahallesi, Sahil Yolu No:15, Kumluca/Antalya',
      link: 'https://maps.google.com/?q=Adrasan,Kumluca,Antalya'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Pazar', hours: '08:00 - 20:00' },
    { day: 'Rezervasyon Hattı', hours: '24/7 Açık' }
  ];

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rezervasyon yapmak veya sorularınızı sormak için bizimle iletişime geçin. 
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Rezervasyon Formu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="0539 360 19 97"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kişi Sayısı
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} Kişi</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tur Seçimi
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      <option value="Günlük Mavi Tur">Günlük Mavi Tur</option>
                      <option value="Romantik Gün Batımı">Romantik Gün Batımı</option>
                      <option value="Balık Avı Turu">Balık Avı Turu</option>
                      <option value="Özel Grup Turu">Özel Grup Turu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tercih Edilen Tarih
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Notlar
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="Özel istekleriniz veya sorularınız..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Gönderildi!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Rezervasyon Talep Et</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Teşekkürler!</h3>
                  <p className="text-gray-600">
                    Rezervasyon talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full group-hover:shadow-lg transition-shadow">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="mr-3 text-cyan-500" />
                Çalışma Saatleri
              </h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-cyan-600 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Sosyal Medya</h3>
              <p className="mb-6">
                Güncel fotoğraflar ve haberler için bizi takip edin!
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/905393601997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <h3 className="text-2xl font-bold">Konumumuz</h3>
              <p>Adrasan Marina'da bizi bulabilirsiniz</p>
            </div>
            <div className="h-80 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="font-medium">Adrasan Mahallesi, Sahil Yolu No:15</p>
                <p>Kumluca/Antalya</p>
                <a
                  href="https://maps.google.com/?q=Adrasan,Kumluca,Antalya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;