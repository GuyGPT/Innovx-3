import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Wrench, Monitor, Briefcase, Leaf, BookOpen, Users, Eye } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

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

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const openImageGallery = (imageName: string) => {
    // Implement your image gallery logic here. This is a placeholder.
    alert(`Opening gallery for ${imageName}`);
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
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {/* Maintenance Professionnelle */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <Wrench className="mr-2" />
                    Maintenance Professionnelle
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#maintenance-packs" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Packs de Maintenance</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-packs.jpg")} />
                    </NavLink>
                    <NavLink href="#maintenance-electrique" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Maintenance Électrique</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-electrique.jpg")} />
                    </NavLink>
                    <NavLink href="#maintenance-froid" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Maintenance Froid et Climatisation</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-froid.jpg")} />
                    </NavLink>
                  </div>
                </div>

                {/* Services Numériques */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <Monitor className="mr-2" />
                    Services Numériques
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#developpement-web" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Développement de Sites Web</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("developpement-web.jpg")} />
                    </NavLink>
                    <NavLink href="#maintenance-informatique" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Maintenance Informatique</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-informatique.jpg")} />
                    </NavLink>
                    <NavLink href="#transformation-digitale" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Consultance en Transformation Digitale</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("transformation-digitale.jpg")} />
                    </NavLink>
                  </div>
                </div>

                {/* Services d'Affaires */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <Briefcase className="mr-2" />
                    Services d'Affaires
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#secretariat-public" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Secrétariat Public</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("secretariat-public.jpg")} />
                    </NavLink>
                    <NavLink href="#librairie-bureautique" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Librairie et Consommables Bureautiques</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("librairie-bureautique.jpg")} />
                    </NavLink>
                  </div>
                </div>

                {/* Énergie et Environnement */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <Leaf className="mr-2" />
                    Énergie et Environnement
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#solutions-energetiques" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Solutions Énergétiques</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("solutions-energetiques.jpg")} />
                    </NavLink>
                    <NavLink href="#controle-technique" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Suivi et Contrôle Technique</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("controle-technique.jpg")} />
                    </NavLink>
                  </div>
                </div>

                {/* Formations Professionnelles */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <BookOpen className="mr-2" />
                    Formations Professionnelles
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#formation-informatique" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Informatique et Bureautique</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("formation-informatique.jpg")} />
                    </NavLink>
                    <NavLink href="#formation-developpement-personnel" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Développement Personnel</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("formation-developpement-personnel.jpg")} />
                    </NavLink>
                  </div>
                </div>

                {/* Consultance et Accompagnement */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
                    <Users className="mr-2" />
                    Consultance et Accompagnement
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#intelligence-financiere" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Intelligence Financière</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("intelligence-financiere.jpg")} />
                    </NavLink>
                    <NavLink href="#developpement-innovation" isDropdown className="flex justify-between items-center">
                      <span className="text-left">Développement Personnel et Innovation</span>
                      <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("developpement-innovation.jpg")} />
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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#040504]">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <MobileNavLink href="#services" onClick={() => { setIsMenuOpen(false); toggleServicesMenu(); }}>
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
            </MobileNavLink>
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

      {/* Mobile Services Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#040504] z-50 transform transition-transform duration-300 ${isServicesMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-[#F8E061]">Services</span>
          <button onClick={toggleServicesMenu} className="p-2 text-[#F8E061]">
            <X size={24} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Maintenance Professionnelle */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <Wrench className="mr-2" />
              Maintenance Professionnelle
            </h3>
            <MobileNavLink href="#maintenance-packs" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Packs de Maintenance</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-packs.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#maintenance-electrique" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Maintenance Électrique</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-electrique.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#maintenance-froid" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Maintenance Froid et Climatisation</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-froid.jpg")} />
            </MobileNavLink>
          </div>

          {/* Services Numériques */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <Monitor className="mr-2" />
              Services Numériques
            </h3>
            <MobileNavLink href="#developpement-web" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Développement de Sites Web</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("developpement-web.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#maintenance-informatique" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Maintenance Informatique</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("maintenance-informatique.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#transformation-digitale" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Consultance en Transformation Digitale</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("transformation-digitale.jpg")} />
            </MobileNavLink>
          </div>

          {/* Services d'Affaires */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <Briefcase className="mr-2" />
              Services d'Affaires
            </h3>
            <MobileNavLink href="#secretariat-public" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Secrétariat Public</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("secretariat-public.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#librairie-bureautique" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Librairie et Consommables Bureautiques</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("librairie-bureautique.jpg")} />
            </MobileNavLink>
          </div>

          {/* Énergie et Environnement */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <Leaf className="mr-2" />
              Énergie et Environnement
            </h3>
            <MobileNavLink href="#solutions-energetiques" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Solutions Énergétiques</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("solutions-energetiques.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#controle-technique" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Suivi et Contrôle Technique</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("controle-technique.jpg")} />
            </MobileNavLink>
          </div>

          {/* Formations Professionnelles */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <BookOpen className="mr-2" />
              Formations Professionnelles
            </h3>
            <MobileNavLink href="#formation-informatique" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Informatique et Bureautique</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("formation-informatique.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#formation-developpement-personnel" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Développement Personnel</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("formation-developpement-personnel.jpg")} />
            </MobileNavLink>
          </div>

          {/* Consultance et Accompagnement */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap">
              <Users className="mr-2" />
              Consultance et Accompagnement
            </h3>
            <MobileNavLink href="#intelligence-financiere" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Intelligence Financière</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("intelligence-financiere.jpg")} />
            </MobileNavLink>
            <MobileNavLink href="#developpement-innovation" onClick={toggleServicesMenu} isDropdown className="flex justify-between items-center">
              <span className="text-left">Développement Personnel et Innovation</span>
              <Eye className="cursor-pointer ml-2" onClick={() => openImageGallery("developpement-innovation.jpg")} />
            </MobileNavLink>
          </div>
        </div>
      </div>
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
        className="px-3 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-1 dropdown-button"
        style={{
          color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          backgroundColor: '#040504'
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-auto rounded-md shadow-lg bg-white border border-black z-50 dropdown-menu">
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, children, isDropdown, className }: { href: string; children: React.ReactNode; isDropdown?: boolean; className?: string }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${isDropdown ? 'block w-full text-left dropdown-link' : ''} ${className || ''}`}
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
  onClick,
  isDropdown,
  className
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isDropdown?: boolean;
  className?: string
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-sm font-medium border transition-colors ${isDropdown ? 'block w-full text-left' : ''} ${className || ''}`}
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
