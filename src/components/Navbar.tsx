import React, { useState, useRef, createContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, languages } from '@/contexts/LanguageContext';
import hertzLogo from '@/assets/Pi7_cropper.png';
import { useContext } from "react";
import { ThemeContext } from "./ui/themeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "sunny";
  const toggleTheme = themeContext?.toggleTheme ?? (() => { });
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/about', label: t('nav.about') },
    { path: '/enquiry', label: t('nav.enquiry') },
  ];

  const isActive = (path: string) => location.pathname === path;
  // const [DarkMode, setDarkMode] = useState(() => {
  //   // Initialize from localStorage, fallback = "sunny"
  //   return localStorage.getItem("theme") || "sunny";
  // });
  // const ThemeContext = createContext(DarkMode);
  // const [checked, setchecked] = useState(false)
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setDarkMode(savedTheme);
  //   }
  // }, []);

  // const ModeIsChange = () => {
  //   const newTheme = DarkMode === "sunny" ? "nightlight" : "sunny";
  //   setDarkMode(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };
  // const ModeIsChange = () => {
  //   DarkMode === "sunny" ? setDarkMode("Nightlight") : setDarkMode("sunny")
  //   // checked === true ? setchecked(false) : setchecked(true)
  //   localStorage.setItem("theme", DarkMode === "sunny" ? "Nightlight" : "sunny")
  // }

  const [hoverPos, setHoverPos] = useState<{ left: number; width: number; opacity: number }>({ left: 0, width: 0, opacity: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleMouseLeave = () => {
    setHoverPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setHoverPos({
      left: rect.left - containerRect.left,
      width: rect.width,
      opacity: 1,
    });
  };
  // const [hoverIndex, setHoverIndex] = useState(null);


  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition ease duration-1000 pt-1 ${theme === "sunny" ? "bg-[var(--background-color)]" : "bg-[var(--darkbackground-color)]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={hertzLogo} alt="Hertz Dynamics" className="w-13 h-14" />
            <span className="text-xl font-bold text-primary">{t('company.name')}</span>
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-10"> */}
          {/* {navItems.map((item) => (
              <Link
                ref={(el) => (refs.current[index] = el)}
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${isActive(item.path)
                  ? 'text-primary font-medium'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            ))}  */}
          {/* <div
            ref={containerRef}
            className="relative hidden md:flex items-center space-x-8"
            onMouseLeave={handleMouseLeave}
          > */}
            {/* moving highlight box */}
            {/* <div
              className="absolute bottom-0 h-8 bg-primary/20 rounded-lg transition-all duration-300 ease-in-out"
              style={{
                left: hoverPos.left,
                width: hoverPos.width,
                opacity: hoverPos.opacity,
              }}
            ></div> */}

            {/* {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={handleMouseEnter}
                className={`relative z-10 px-2 py-1 transition-colors duration-200  ${location.pathname === item.path
                  ? "text-[var(--highlight-color)] font-medium"
                  : "text-[var(--highlight-color)] hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))} */}
            <div
              ref={containerRef}
              className="relative hidden md:flex items-center space-x-8"
              onMouseLeave={handleMouseLeave}
            >
              {/* moving highlight box */}
              <div
                className="absolute p-3 h-8 bg-primary/20 rounded-lg transition-all duration-300 ease-in-out"
                style={{
                  left: hoverPos.left,
                  width: hoverPos.width,
                  opacity: hoverPos.opacity,
                }}
              ></div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={handleMouseEnter}
                  className={`relative z-10 px-2 py-1 transition-colors duration-200  ${location.pathname === item.path
                    ? "text-primary font-medium"
                    : "text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* hover:bg-blue-300 hover:p-2 hover:rounded-[10px] hover:font-bold */}
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <span>{currentLanguage.nativeName}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => setLanguage(language)}
                      className={currentLanguage.code === language.code ? 'bg-accent' : ''}
                    >
                      {language.nativeName}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`ml-3 p-2 rounded-full flex justify-center items-center border transition-all duration-300 ease-in-out hover:shadow-glow ${theme === 'sunny' ? 'bg-[var(--background-color)] border-border' : 'bg-[var(--darkbackground-color)] border-border'
                  }`}
              >
                {theme === 'sunny' ? (
                  <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 ease-in-out rotate-0 scale-100" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-300 transition-transform duration-300 ease-in-out rotate-180 scale-95" />
                )}
              </button>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex justify-center items-center">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 m-3 rounded-full flex justify-center items-center border transition-all duration-300 ease-in-out ${theme === 'sunny' ? 'bg-[var(--background-color)] border-border' : 'bg-[var(--darkbackground-color)] border-border'
                  }`}
              >
                {theme === 'sunny' ? (
                  <Sun className="w-6 h-6 text-amber-500 transition-transform duration-300 ease-in-out rotate-0 scale-100" />
                ) : (
                  <Moon className="w-6 h-6 text-blue-300 transition-transform duration-300 ease-in-out rotate-180 scale-95" />
                )}
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}

          {isOpen && (
            <div className={`md:hidden transition ease duration-500 ${(theme === "sunny") ? "bg-[var(--background-color)]" : "bg-[var(--darkbackground-color)]"} border-t border-border`}>

              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${isActive(item.path)
                      ? 'text-primary bg-accent font-medium'
                      : 'text-primary hover:bg-accent'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}


                {/* Mobile Language Selection */}
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">{t('nav.language')}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setLanguage(language);
                          setIsOpen(false);
                        }}
                        className={`text-left px-2 py-1 rounded text-sm transition-colors ${currentLanguage.code === language.code
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent'
                          }`}
                      >
                        {language.nativeName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      {/* </div> */}
    </nav>
  );
};
export default Navbar;
