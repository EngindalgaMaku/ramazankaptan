import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Güvenli Seyahat',
      description: 'Tüm güvenlik standartlarına uygun teknelerimiz ve deneyimli mürettebatımızla güvenli yolculuk.'
    },
    {
      icon: Users,
      title: 'Profesyonel Hizmet',
      description: '15 yılı aşkın deneyimimizle misafirlerimize en kaliteli hizmeti sunuyoruz.'
    },
    {
      icon: Award,
      title: 'Mükemmellik Ödülü',
      description: 'Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla sektörde öncü konumdayız.'
    },
    {
      icon: Clock,
      title: '7/24 Destek',
      description: 'Rezervasyon öncesi ve sonrası tüm sorularınız için her zaman yanınızdayız.'
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Adrasan'ın eşsiz güzelliklerini keşfetmeniz için 2008 yılından beri hizmet veriyoruz. 
            Deneyimli kaptan ve mürettebatımızla unutulmaz anılar biriktirmenizi sağlıyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Kaptan Ramazan'ın Hikayesi
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Akdeniz'in mavi sularında doğup büyüyen Kaptan Ramazan, 15 yılı aşkın süredir 
              misafirlerine unutulmaz deniz deneyimleri yaşatıyor. Adrasan koylarının her 
              karışını bilen deneyimli kaptanımız, güvenli ve keyifli yolculuklar için 
              elinden geleni yapıyor.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Modern ve güvenli teknelerimizle, kristal berraklığındaki sularda yüzme, 
              snorkeling ve güneşlenme imkanı sunuyoruz. Her yaştan misafirimizin 
              memnuniyeti bizim için öncelik.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Shield className="text-cyan-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Güvenlik Sertifikalı</h4>
                <p className="text-gray-600">Tüm denizcilik belgelerine sahip</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
              alt="Kaptan Ramazan ve Tekne"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;