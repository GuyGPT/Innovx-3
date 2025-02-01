import React from 'react';

const FAQ = () => {
  return (
    <section className="section py-16 px-8 bg-[var(--dark)] border-b border-[var(--primary)]">
      <h2 className="section-title text-center text-3xl text-[var(--primary)] mb-12">FAQ</h2>
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="service-card bg-[var(--dark)] p-8 rounded-lg shadow-lg border border-[var(--primary)]">
          <h3 className="text-[var(--primary)] text-xl font-bold mb-4">
            Répondre aux questions fréquemment posées
          </h3>
          <p className="text-[var(--light)]">
            Questions et réponses sur les services, la marketplace, la procédure d'inscription, 
            les paiements, etc.
          </p>
        </div>
        
        <div className="service-card bg-[var(--dark)] p-8 rounded-lg shadow-lg border border-[var(--primary)]">
          <h3 className="text-[var(--primary)] text-xl font-bold mb-4">
            Témoignages Clients
          </h3>
          <p className="text-[var(--light)]">
            Témoignages de clients satisfaits, études de cas et success stories pour 
            renforcer la crédibilité et la confiance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
