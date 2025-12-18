import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, CONTACT_INFO } from '../constants';
import { Reveal } from './ui/Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Historias de Recuperación</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              La confianza de nuestros pacientes es nuestra mejor carta de presentación.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={index * 100}>
              <a 
                href={CONTACT_INFO.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="mb-6">
                    <div className="flex gap-1 text-accent-400 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-primary-300 opacity-50" />
                  </div>
                  <p className="text-base text-gray-100 mb-6 italic font-serif flex-grow leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-900 font-bold uppercase">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                      <p className="text-xs text-primary-200 uppercase tracking-wider font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4">
            <Reveal delay={400}>
                <a 
                  href={CONTACT_INFO.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform group"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
                    <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-current"/>
                        <Star className="w-4 h-4 fill-current"/>
                        <Star className="w-4 h-4 fill-current"/>
                        <Star className="w-4 h-4 fill-current"/>
                        <Star className="w-4 h-4 fill-current"/>
                    </div>
                    <span className="text-gray-800 font-bold text-sm">5.0 de 40 reseñas</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-primary-600 ml-1" />
                </a>
            </Reveal>
            <Reveal delay={500}>
                <p className="text-primary-200 text-sm italic">Hacé clic en cualquier reseña para verla en Google Maps</p>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;