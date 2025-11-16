import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import drone1 from '@/assets/Drone.jpg';
import drone1 from '@/assets/drone-1.jpg';
import drone2 from '@/assets/coreless_dc_motor.jpg';
import drone3 from '@/assets/Axial_flux_motor.png';
import drone4 from '@/assets/BLDC_motor.png';
import drone5 from '@/assets/PMSM.png';
import drone6 from '@/assets/Transformer.jpg';
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/themeContext";
const Products: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Drone',
      image: drone1,
      // price: '$2,999',
      // rating: 4.9,
      description: 'Professional 4K aerial photography drone with 30 minutes flight time and advanced stabilization capabilities.',
      features: ['4K Ultra HD Camera', '2 hours flight time', 'Obstacle Avoidance', 'GPS Tracking','Surveillance & Thermal Imaging'],
    },
    {
      id: 2,
      name: 'Coreless DC Motor',
      image: drone2,
      // price: '$4,599',
      // rating: 4.8,
      description: 'Lens drive in video camera, surveying instruments, endoscopy, robotics, surgical drilling and other micromechanical applications.',
      features: ['No cogging', 'Quick response', 'Low electrical noise', 'High torque constant','Quieter Operatio'],
    },
    {
      id: 3,
      name: 'Axial Flux motor',
      image: drone3,
      // price: '$1,299',
      // rating: 4.7,
      description: 'Ultra-light weight for EV applications, electric planes, racing drone and precise controls.',
      features: ['Segmented armature', 'Magnetic saturation optimization', 'High torque', 'High durability','Low vibration'],
    },
    {
      id: 4,
      name: 'BLDC Motor',
      image: drone4,
      // price: '$3,799',
      // rating: 4.9,
      description: 'Agricultural mapping drone with multispectral sensors for crop monitoring.',
      features: ['Continuous maximum torque', 'Small size', 'Low electric noise', 'High durability','Ease of control'],
    },
    {
      id: 5,
      name: 'PMSM',
      image: drone5,
      // price: '$5,999',
      // rating: 4.8,
      description: 'Superlative controllability, energy efficient, high-capacity storage drives, mobility carts, EVs and drones.',
      features: ['Highly efficient', 'Continuous maximum torque', 'Minimal heat dissipation', 'Wide speed range','Cost effective','Low electric noise'],
    },
    {
      id: 6,
      name: 'Transformer',
      image: drone6,
      // price: '$2,199',
      // rating: 4.6,
      description: 'Arc furnaces, medical devices, induction heating, railway electrification, audio amplifiers and telecommunication systems.',
      features: ['Excellent isolation', 'High efficiency', 'Reduced operating cost', 'Higher saturation densities','Less hysteresis loss'],
    },
  ];

  // const [DarkMode, setDarkMode] = useState(() => {
  //   // Initialize from localStorage, fallback = "sunny"
  //   return localStorage.getItem("theme") || "sunny";
  // });

  return (
    <div className={`min-h-screen  transition ease duration-1000 pt-1 ${theme === "sunny" ? "bg-[var(--background-color)] " : "bg-[var(--darkbackground-color)]"}`}>
      <Navbar />

      {/* Header Section */}
      <section className={`pt-24 pb-16 transition ease duration-1000 ${theme === "sunny" ? "bg-[var(--gradient-primary)]" : "bg-[var(--darkgradientprimary)]"} relative`}>
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 ">
            {t('products.title')}
          </h1>
          <p className="text-xl text-[var(--muted-text-color)] max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {products.map((product) => (
              <div key={product.id} className="flip-card group">
                <Card className={`flip-card-inner h-96 cursor-pointer hover:shadow-lg shadow-[var(--shadow-color)] transition ease duration-1000 pt-1 ${theme === "sunny" ? "bg-[var(--background-color)]" : "bg-[var(--darkbackground-color)]"}`}>

                  {/* Front Side */}
                  <div className="flip-card-front">
                    <CardContent className="p-0 h-full bg-[var(--background-color)]">
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-[var(--highlight-color)] " />
                          <Star className="w-4 h-4 fill-yellow-400 text-[var(--highlight-color)] " />
                        </div> */}
                      </div>
                      <div className="p-6 text-center ">
                        <h3 className="text-xl font-bold p-2 text-[var(--text-color)] border-2 rounded-lg mb-2">{product.name}</h3>
                        {/* <Button className="w-full bg-gradient-primary hover:bg-[var(--gradient-hover)] hover:opacity-90">
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Button> */}
                      </div>
                    </CardContent>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-hero text-white">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                      <p className="text-sm mb-6 flex-grow text-[var(--muted-text-color)]">{product.description}</p>
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      {/* <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                        Learn More
                      </Button> */}
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;