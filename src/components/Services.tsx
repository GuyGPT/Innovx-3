import React from 'react';

const Services = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-[var(--dark)] border-b border-[var(--primary)]">
      <h2 className="text-2xl md:text-3xl text-center text-[var(--primary)] mb-8 md:mb-12">
        Nos Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
        <div className="bg-[var(--dark)] p-4 md:p-8 rounded-lg shadow-lg border border-[var(--primary)] hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[var(--primary)]">
            Maintenance Professionnelle
          </h3>
          <p className="text-sm md:text-base text-[var(--light)]">
            Solutions de maintenance adaptées pour les ménages, entreprises et institutions. 
            Packs personnalisés et suivi rigoureux.
          </p>
        </div>
        
        <div className="bg-[var(--dark)] p-4 md:p-8 rounded-lg shadow-lg border border-[var(--primary)] hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[var(--primary)]">
            Services Numériques
          </h3>
          <p className="text-sm md:text-base text-[var(--light)]">
            Développement web, maintenance informatique et transformation digitale 
            pour propulser votre présence en ligne.
          </p>
        </div>
        
        <div className="bg-[var(--dark)] p-4 md:p-8 rounded-lg shadow-lg border border-[var(--primary)] hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[var(--primary)]">
            Formation
          </h3>
          <p className="text-sm md:text-base text-[var(--light)]">
            Formations pratiques en informatique, développement personnel et 
            intelligence financière. En présentiel et en ligne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
