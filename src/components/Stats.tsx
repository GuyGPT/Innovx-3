import React from 'react';
import { Users, ThumbsUp, Clock, Trophy } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-[var(--dark)] border-b border-[var(--primary)]">
      <h2 className="text-2xl md:text-3xl text-center text-[var(--primary)] mb-8 md:mb-12">
        Pourquoi Nous Choisir
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
        <div className="text-center p-4 md:p-8">
          <Trophy className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">7</div>
          <div className="text-sm md:text-base text-[var(--light)]">Experts Dévoués</div>
        </div>
        
        <div className="text-center p-4 md:p-8">
          <ThumbsUp className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">100%</div>
          <div className="text-sm md:text-base text-[var(--light)]">Satisfaction Client</div>
        </div>
        
        <div className="text-center p-4 md:p-8">
          <Clock className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">24/7</div>
          <div className="text-sm md:text-base text-[var(--light)]">Support Client</div>
        </div>
        
        <div className="text-center p-4 md:p-8">
          <Users className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">4853</div>
          <div className="text-sm md:text-base text-[var(--light)]">Inscriptions au Site</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
