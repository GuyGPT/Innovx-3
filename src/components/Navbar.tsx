import React, { useState, useEffect } from 'react';
import { Menu, X, Settings, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <nav className="bg-[var(--primary)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/xDYyC9D/1736963821453.png" 
              alt="InnovXPRO.COM logo" 
              className="h-8 w-auto sm:h-10"
            />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-[var(--dark)]">
              InnovX
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Desktop Menu Items */}
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#formation">Formation</NavLink>
              <NavLink href="#technologies">Technologies</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--primary)] transition-colors"
              >
                {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                <span className="ml-2">Thème</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--primary)] transition-colors"
              >
                <Settings size={24} />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--primary)] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-[var(--dark)] z-50 overflow-y-auto">
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
              className="flex items-center justify-center p-2 rounded-md text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--dark)] transition-colors"
            >
              {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
              <span className="ml-2">Thème</span>
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md text-[var(--primary)]"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
    className="text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--dark)] block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
