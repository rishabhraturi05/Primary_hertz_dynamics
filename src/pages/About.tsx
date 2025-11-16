import React, { useState } from 'react';
import { Award, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// Images (keep your existing image imports)
import founder1 from '@/assets/founder.jpg';
import director from '@/assets/director.jpg';
import member1 from '@/assets/member1.jpg';
import member2 from '@/assets/member2.jpg';
import member3 from '@/assets/member3.jpg';
import profile from '@/assets/noprofile.png';

import { useContext } from "react";
import { ThemeContext } from "@/components/ui/themeContext";

const About: React.FC = () => {
  const { t } = useLanguage();
    const { theme, toggleTheme } = useContext(ThemeContext);
  

  const founders = [
    {
      name: t('founder.name') || 'Founder Name',
      role: t('foun') || 'Founder',
      image: founder1,
      description: t('founder.info') || 'Founder description goes here.',
    },
    {
      name: t('director.name') || 'Director Name',
      role: t('direct') || 'Director',
      image: director,
      description: t('director.info') || 'Director description goes here.',
    },
  ];

  const webTeam = [
    { name: t('member1.name') || 'Member One', role: t('memb') || 'Web Dev', image: member1, description: t('member1.info') || '' },
    { name: t('member2.name') || 'Member Two', role: t('memb') || 'Web Dev', image: member2, description: t('member2.info') || '' },
    { name: t('member3.name') || 'Member Three', role: t('memb') || 'Web Dev', image: member3, description: t('member3.info') || '' },
  ];

  const rndTeam = [
    { name: `${t('Ms.Anjusmitha Sangala') || 'Member One'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
    { name: `${t('Ms.Archana Rapolu') || 'Member Two'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
    { name: `${t('Ms.Rani Chiluveru') || 'Member Three'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
    { name: `${t('Ms.Shivani Adla') || 'Member One'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
    { name: `${t('Ms.Thulasi Chikati') || 'Member Two'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
    { name: `${t('Ms.Yamini Athikam') || 'Member Three'} `, role: t('R&D team') || 'R&D', image: profile, description: t('R&D team') || '' },
  ];

  // FlipCard component
  const FlipCard: React.FC<{
    name: string;
    role: string;
    image: string;
    description: string;
    delay?: number;
    from?: 'left' | 'right';
    contained?: boolean;
    justify?: boolean;
  }> = ({ name, role, image, description, delay = 0, from = 'right', contained = false, justify = false }) => {
    const frontTextClass = contained ? 'text-white' : 'text-primary';
    const roleTextClass = contained ? 'text-white/90' : 'text-primary-light';
    const frontCardClass = contained
      ? 'absolute inset-0 flex flex-col items-center justify-center p-4 rounded-xl [backface-visibility:hidden] bg-transparent shadow-none'
      : 'absolute inset-0 flex flex-col items-center justify-center p-4 shadow-lg rounded-xl [backface-visibility:hidden] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-600 text-white';
    const backCardClass = contained
      ? 'absolute inset-0 flex flex-col items-center justify-center p-6 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white/10 shadow-none'
      : 'absolute inset-0 flex flex-col items-center justify-center p-6 shadow-lg rounded-xl bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 [transform:rotateY(180deg)] [backface-visibility:hidden]';

    return (
      <motion.div
        initial={{ opacity: 0, x: from === 'right' ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        // removed "group" so hover is scoped to the card itself
        className="[perspective:1000px]"
      >

        {/* use hover on the card container so toggling elsewhere won't trigger a flip */}
        <div className="relative h-[340px] w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
          {/* Front Face */}
          <Card className={frontCardClass}>
            <img src={image} alt={name} className={`w-32 h-40 object-cover rounded-lg mb-4 ${contained ? 'opacity-90' : ''}`} />
            <h3 className={`text-xl font-bold ${frontTextClass}`}>{name}</h3>
            <p className={roleTextClass}>{role}</p>
          </Card>

          {/* Back Face */}
          <Card className={backCardClass}>
            <p className={`${contained ? 'text-white/90' : 'text-muted-foreground'} leading-relaxed text-center ${justify ? 'text-justify' : ''}`}>
              {description}
            </p>
          </Card>
        </div>
      </motion.div>
    );
  };

  // Honeybee themed ButtonWithWheel (propellor icon removed)
  const ButtonWithWheel: React.FC<{
    label: string;
    open: boolean;
    onClick: () => void;
  }> = ({ label, open, onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-expanded={open}
        className="relative w-full flex items-center gap-4 py-4 pr-16 pl-6 rounded-2xl font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
        style={{ background: 'linear-gradient(90deg, #F0F8FF 0%, #A3D4FF 50%, #3399FF 100%)' }}
      >
        {/* left aligned text + bee icon */}
        <span className="flex items-center text-left text-blue-900 text-lg tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 text-amber-800">
            <path d="M12 2c.7 0 1.38.12 2 .34.2.06.36.22.42.42.28.9.72 1.73 1.3 2.5.34.44.2 1.07-.34 1.38-.73.43-1.46.9-2.22 1.32-.32.18-.7.18-1.02 0C11.46 10 10.73 9.54 10 9.1c-.54-.31-.68-.94-.34-1.38.58-.77 1-1.6 1.28-2.5.06-.2.22-.36.42-.42C10.62 2.12 11.3 2 12 2z" />
            <path d="M5 14c0 2 2 4 4 4s4-2 4-4-2-4-4-4-4 2-4 4z" opacity=".9" />
          </svg>
          {label}
        </span>

        {/* removed propeller icon per request */}
      </button>
    );
  };

  const [webOpen, setWebOpen] = useState(false);
  const [rndOpen, setRndOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition ease duration-1000 pt-1 ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}
    >
      <Navbar />
      {/* Hero Section */}
      {/* <section className="pt-24 pb-16 bg-gradient-accent relative"> */}
      {/* <div className="absolute inset-0 hex-pattern opacity-10"></div> */}
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div> */}

      {/* Stats */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* Founders Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t('about.meet') || 'Meet the Team'}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('about.belowmeet') || 'We are a small team passionate about building great products.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {founders.map((founder, index) => (
              <FlipCard
                key={founder.name}
                name={founder.name}
                role={founder.role}
                image={founder.image}
                description={founder.description}
                delay={index * 0.2}
                from={index % 2 === 0 ? 'right' : 'left'}
                justify // ensure founder/director description is justified
              />
            ))}
          </div>

          {/* Web Team Button */}
          <div className="mb-4">
            <ButtonWithWheel label={t('Web Team') || 'Web Team'} open={webOpen} onClick={() => setWebOpen((s) => !s)} />
          </div>

          {/* Web Team Collapsible - container has same primary feel as button so it looks "contained" */}
          <AnimatePresence>
            {webOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden mb-6"
              >
                <div className="rounded-2xl p-6 mt-3" style={{ background: 'linear-gradient(90deg, #E6F2FF 0%, #8EC8FF 50%, #007BFF 100%)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {webTeam.map((m, idx) => (
                      <FlipCard
                        key={m.name + idx}
                        name={m.name}
                        role={m.role}
                        image={m.image}
                        description={m.description}
                        delay={idx * 0.08}
                        from={idx % 2 === 0 ? 'right' : 'left'}
                        contained
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* R&D Team Button */}
          <div className="mb-4">
            <ButtonWithWheel label={t('Research & Development Team') || 'R&D Team'} open={rndOpen} onClick={() => setRndOpen((s) => !s)} />
          </div>

          {/* R&D Team Collapsible */}
          <AnimatePresence>
            {rndOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden mb-8"
              >
                <div className="rounded-2xl p-6 mt-3" style={{ background: 'linear-gradient(90deg, #E6F2FF 0%, #8EC8FF 50%, #007BFF 100%)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rndTeam.map((m, idx) => (
                      <FlipCard
                        key={m.name + idx}
                        name={m.name}
                        role={m.role}
                        image={m.image}
                        description={m.description}
                        delay={idx * 0.06}
                        from={idx % 2 === 0 ? 'right' : 'left'}
                        contained
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Mission & Values (unchanged but themed) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-blue-900" />, title: t('ourmission') || 'Our Mission', text: t('mission') || 'To build helpful tools.' },
              { icon: <Award className="w-8 h-8 text-blue-900" />, title: t('ourvision') || 'Our Vision', text: t('vision') || 'Make learning accessible.' },
              { icon: <Users className="w-8 h-8 text-blue-900" />, title: t('ourvalues') || 'Our Values', text: t('values') || 'Empathy, Quality, Growth.' },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                <Card className="text-center p-8 shadow-md hover:shadow-lg transition-transform hover:scale-105 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;