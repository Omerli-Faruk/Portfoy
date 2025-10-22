import { memo } from 'react';
import handShakeStatic from '../assets/photos/hero.webp';

const Hero = memo(() => (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto">
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <img
                    src={handShakeStatic}
                    alt="Illustration of a hand waving"
                    className="max-w-xs lg:max-w-sm rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="text-center md:text-left max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                    Merhaba, ben <span className="text-blue-600 dark:text-blue-400 whitespace-nowrap">Ömer Faruk</span>,
                     Mobil ve Web Geliştiricisiyim.
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8">
                    Kullanıcı odaklı, yenilikçi ve performanslı mobil ve web uygulamaları geliştiriyorum. Fikirlerinizi gerçeğe dönüştürmek için buradayım.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="
                            inline-flex items-center justify-center px-8 py-3 rounded-md border border-transparent
                            text-base font-medium text-white shadow-lg
                            bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                            transition-colors duration-300"
                    >
                        Projelerimi Gör
                    </a>
                    <a
                        href="#contact"
                        className="
                            inline-flex items-center justify-center px-8 py-3 rounded-md border
                            text-base font-medium bg-transparent
                            border-blue-600 text-blue-600 hover:bg-blue-50
                            dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800
                            transition-colors duration-300"
                    >
                        İletişime Geç
                    </a>
                </div>
            </div>
        </div>
    </section>
));
Hero.displayName = 'Hero';

export default Hero;