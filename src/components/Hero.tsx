import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-8 md:py-16 px-4 md:px-8 text-center border-b-2 border-[var(--primary)] bg-[var(--dark)]">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--primary)]">
        InnovX SARL
      </h1>
      <p className="text-lg md:text-xl mb-2 text-[var(--primary)]">
        Votre partenaire d'affaires innovant au
      </p>
      <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-[var(--primary)]">
        Solutions professionnelles sur mesure, formations pratiques et opportunités d'affaires exclusives
      </p>
      <div className="w-full max-w-2xl mx-auto aspect-video">
        <iframe
          src="https://drive.google.com/file/d/1Fej2Q3z6rtYeUESUQjdRiYP6EsW7_0Ay/preview"
          className="w-full h-full border-4 border-[var(--primary)] rounded-lg"
          allow="autoplay; fullscreen"
        />
      </div>
    </section>
  );
};

export default Hero;
