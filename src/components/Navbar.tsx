import React, { useState, useEffect } from 'react';
    import { Menu, X, Moon, Sun } from 'lucide-react';

    const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [theme, setTheme] = useState('dark');
      const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

      const toggleDropdown = (title: string) => {
        setOpenDropdown((prev) => (prev === title ? null : title));
      };

      return (
        <nav className="bg-[#040504]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="https://i.ibb.co/xDYyC9D/1736962221412" 
                  alt="InnovXPRO.COM" 
                  className="h-8 w-auto sm:h-10"
                />
                <span className="ml-2 text-xl sm:text-2xl font-bold text-[#F8E061]">
                  InnovX
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <DropdownMenu title="Services" isOpen={openDropdown === 'Services'} toggleDropdown={toggleDropdown}>
                  <div className="space-y-1">
                    {/* Maintenance Professionnelle */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-white dark:text-[#F8E061]">Maintenance Professionnelle</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#maintenance-packs" isDropdown>
                          Packs de Maintenance
                        </NavLink>
                        <NavLink href="#maintenance-electrique" isDropdown>
                          Maintenance Électrique
                        </NavLink>
                        <NavLink href="#maintenance-froid" isDropdown>
                          Maintenance Froid et Climatisation
                        </NavLink>
                      </div>
                    </div>

                    {/* Services Numériques */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-white dark:text-[#F8E061]">Services Numériques</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#developpement-web" isDropdown>
                          Développement de Sites Web
                        </NavLink>
                        <NavLink href="#maintenance-informatique" isDropdown>
                          Maintenance Informatique
                        </NavLink>
                        <NavLink href="#transformation-digitale" isDropdown>
                          Consultance en Transformation Digitale
                        </NavLink>
                      </div>
                    </div>

                    {/* Services d'Affaires */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#F8E061]">Services d'Affaires</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#secretariat-public" isDropdown>
                          Secrétariat Public
                        </NavLink>
                        <NavLink href="#librairie-bureautique" isDropdown>
                          Librairie et Consommables Bureautiques
                        </NavLink>
                      </div>
                    </div>

                    {/* Énergie et Environnement */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#F8E061]">Énergie et Environnement</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#solutions-energetiques" isDropdown>
                          Solutions Énergétiques
                        </NavLink>
                        <NavLink href="#controle-technique" isDropdown>
                          Suivi et Contrôle Technique
                        </NavLink>
                      </div>
                    </div>

                    {/* Formations Professionnelles */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#F8E061]">Formations Professionnelles</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#formation-informatique" isDropdown>
                          Informatique et Bureautique
                        </NavLink>
                        <NavLink href="#formation-developpement-personnel" isDropdown>
                          Développement Personnel
                        </NavLink>
                      </div>
                    </div>

                    {/* Consultance et Accompagnement */}
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-[#F8E061]">Consultance et Accompagnement</h3>
                      <div className="mt-1 space-y-1">
                        <NavLink href="#intelligence-financiere" isDropdown>
                          Intelligence Financière
                        </NavLink>
                        <NavLink href="#developpement-innovation" isDropdown>
                          Développement Personnel et Innovation
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </DropdownMenu>
                <NavLink href="#formation">Formation</NavLink>
                <NavLink href="#coaching">Coaching/Mentorat</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <NavLink href="#communaute">Communauté</NavLink>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center p-2 rounded-md border transition-colors"
                  style={{
                    color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    backgroundColor: '#040504'
                  }}
                >
                  {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md border transition-colors"
                  style={{
                    color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    backgroundColor: '#040504'
                  }}
                  aria-label="Open main menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-[#040504]">
              <div className="px-2 pt-2 pb-3">
                <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </MobileNavLink>
                <MobileNavLink href="#formation" onClick={() => setIsMenuOpen(false)}>
                  Formation
                </MobileNavLink>
                <MobileNavLink href="#coaching" onClick={() => setIsMenuOpen(false)}>
                  Coaching/Mentorat
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>
                <MobileNavLink href="#communaute" onClick={() => setIsMenuOpen(false)}>
                  Communauté
                </MobileNavLink>
                <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                  À propos
                </MobileNavLink> {/* Nouveau lien */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full px-3 py-2 rounded-md border transition-colors"
                  style={{
                    color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                    backgroundColor: '#040504'
                  }}
                >
                  {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>
            </div>
          )}
        </nav>
      );
    };

    interface DropdownMenuProps {
      title: string;
      isOpen: boolean;
      toggleDropdown: (title: string) => void;
      children: React.ReactNode;
    }

    const DropdownMenu = ({ title, isOpen, toggleDropdown, children }: DropdownMenuProps) => {
      return (
        <div className="relative">
          <button
            onClick={() => toggleDropdown(title)}
            className="px-3 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-1"
            style={{
              color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
              borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
              backgroundColor: '#040504'
            }}
          >
            {title}
            <svg 
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#040504] border border-[#F8E061] z-50">
              <div className="py-1">
                {children}
              </div>
            </div>
          )}
        </div>
      );
    };

    const NavLink = ({ href, children, isDropdown }: { href: string; children: React.ReactNode; isDropdown?: boolean }) => (
      <a
        href={href}
        className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${isDropdown ? 'block w-full text-left' : ''}`}
        style={{
          color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          backgroundColor: '#040504'
        }}
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
        className="block px-3 py-2 rounded-md text-sm font-medium border transition-colors"
        style={{
          color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          backgroundColor: '#040504'
        }}
      >
        {children}
      </a>
    );

    export default Navbar;
