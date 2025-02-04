import React, { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="bg-[#040504] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/xDYyC9D/1736962221453.png" 
              alt="InnovXPRO.COM logo" 
              className="h-8 w-auto sm:h-10"
            />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-[#F8E061]">
              InnovX
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop Menu Items */}
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#formation">Formation</NavLink>
            <NavLink href="#technologies">Technologies</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-[#040504] border border-white hover:border-[#040504] transition-colors"
            >
              <span className="mr-2">Thème</span>
              {theme === 'dark' ? <Moon size={24} /> : <Moon size={24} />}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-[#040504] border border-white hover:border-[#040504] transition-colors"
              aria-label="Open main menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#040504] text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#formation" onClick={() => setIsMenuOpen(false)}>
              Formation
            </MobileNavLink>
            <MobileNavLink href="#technologies" onClick={() => setIsMenuOpen(false)}>
              Technologies
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-full px-3 py-2 rounded-md text-white hover:bg-white hover:text-[#040504] border border-white hover:border-[#040504] transition-colors"
            >
              <span className="mr-2">Thème</span>
              {theme === 'dark' ? <Moon size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:bg-white hover:text-[#040504] px-3 py-2 rounded-md text-sm font-medium border border-white hover:border-[#040504] transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-[#040504] border border-white hover:border-[#040504] transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
