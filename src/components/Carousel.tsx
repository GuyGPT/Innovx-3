import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "https://i.ibb.co/Q9ZptwK/Flyer-Formation-en-informatique-innov-X-1.jpg",
      alt: "Formation en informatique"
    },
    {
      src: "https://i.ibb.co/SKh8pQk/Flyer-consultance-innov-X.jpg",
      alt: "Consultance InnovX"
    },
    {
      src: "https://i.ibb.co/R3srpDt/Flyer-general-innov-X.jpg",
      alt: "Services InnovX"
    },
    {
      src: "https://i.ibb.co/3crdLpy/Flyer-formation-maintenance-innov-X.jpg",
      alt: "Formation maintenance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel max-w-[800px] mx-auto my-8 relative overflow-hidden rounded-lg border-2 border-[var(--primary)] aspect-square">
      <div 
        className="carousel-container transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
    <div className="carousel-controls flex justify-center gap-2 mt-2">
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
  );
};

export default Carousel;
