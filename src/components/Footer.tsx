import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from '@/contexts/LanguageContext';
import hertzLogo from '@/assets/Pi7_cropper.png';
import { ThemeContext } from "@/components/ui/themeContext";
import { useContext } from "react";


const Footer: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useLanguage();

  const socialLinks = [
    // { icon: Facebook, href: '#', label: 'Facebook' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/your-number', label: 'WhatsApp' },

  ];

  return (
    <footer className={` text-gray-500 relative overflow-hidden ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}>
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-10 "></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t-[1px] border-gray-400 pt-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={hertzLogo} alt="Hertz Dynamics" className="w-10 h-12" />
              <span className="text-2xl font-bold text-primary">{t('company.name')}</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.address')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>#103, Level-1, CII, National Institute of Technology, Warangal</p>
                  <p>Telangana – 506 004</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                {/* <a href="mailto:info@hertzdynamics.com" className="hover:text-primary-light transition-colors"> */}
                  <p>hertzdynamics@gmail.com</p>
                {/* </a> */}
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                {/* <a href="tel:+1234567890" className="hover:text-primary-light transition-colors"> */}
                  <p>+91-833-2923-289.</p>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-primary-light text-sm">
            © 2024 Hertz Dynamics. All rights reserved.
          </p> */}
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;