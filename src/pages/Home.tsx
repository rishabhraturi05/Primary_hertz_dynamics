import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroDrone from '@/assets/hero-drone.jpg';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/themeContext";
import ConnectingDotsBackground from '@/components/homepagebg';

const Home: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate video scale based on scroll
  const videoScale = Math.max(0.6, 1 - scrollY / 1000);
  const videoOpacity = Math.max(0.3, 1 - scrollY / 800);

  return (
    <div className={`min-h-screen transition ease duration-1000 pt-1 ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}>
      <Navbar />

      {/* Hero Section */}
      <section className={`relative h-screen flex items-center justify-center overflow-hidden ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}>
        {/* Background Video/Image */}
        {/* <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${videoScale})`,
            opacity: videoOpacity,
          }}
        >
          <img
            src={heroDrone}
            alt="Drone Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div> */}  
                <div className="absolute inset-0 hex-pattern opacity-20 ">
            <ConnectingDotsBackground>
              <div className="absolute inset-0 hex-pattern opacity-20 "></div>
            </ConnectingDotsBackground>
          </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center text-primary max-w-4xl mx-auto px-4 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 scroll-reveal">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light scroll-reveal">
            {/* {t('hero.subtitle')} */}
          </p>
          <div className="flex justify-center scroll-reveal">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">
                {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className={`py-20 relative transition ease duration-1000 pt-1 ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}>
        <div className="absolute inset-0 hex-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed text-justify">
              {t("about.description")}
            </p>

          </div>

          {/* Features Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-accent rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-muted-foreground">Cutting-edge drone technology with AI-powered autonomous flight systems.</p>
            </div>

            <div className="text-center p-6 bg-gradient-accent rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">High-speed performance with precision control for professional applications.</p>
            </div>

            <div className="text-center p-6 bg-gradient-accent rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Built to Last</h3>
              <p className="text-muted-foreground">Durable construction designed to withstand demanding operational environments.</p>
            </div>
          </div> */}

          <div className="text-center mt-12">
            <Button asChild variant="gradient" size="lg">
              <Link to="/about">
                {t('learn.btn')}<ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;