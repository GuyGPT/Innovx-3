import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "InnovX a vraiment surpassé mes attentes. Leur équipe est très professionnelle et réactive.",
      author: "Jean Dupont",
      position: "PDG de Dupont Inc."
    },
    {
      text: "Les formations proposées par InnovX sont exceptionnelles. J'ai acquis de solides compétences en informatique.",
      author: "Marie Martin",
      position: "Ingénieure Logicielle"
    },
    {
      text: "Le service client d'InnovX est impeccable. Ils m'ont aidé à résoudre tous mes problèmes rapidement.",
      author: "Pierre Durand",
      position: "Directeur Technique"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="carousel max-w-[800px] mx-auto my-8 relative overflow-hidden rounded-lg border-2 border-[var(--primary)] aspect-square">
      <div 
        className="carousel-container transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col items-center justify-center p-8 bg-[var(--dark)] text-[var(--light)]"
          >
            <p className="text-lg md:text-xl mb-4 text-center">{testimonial.text}</p>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[var(--primary)]">{testimonial.author}</h3>
              <p className="text-sm text-[var(--light)]">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-controls absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-8 h-8 bg-[var(--primary)] text-[var(--dark)] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 bg-[var(--primary)] text-[var(--dark)] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
