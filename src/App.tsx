import React, { useState, useEffect } from 'react';
import { Sun, Moon, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import SocialLinks from './components/SocialLinks';
import Carousel from './components/Carousel';
import ChatBot from './components/ChatBot';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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
    <div className="bg-[var(--dark)] text-[var(--light)]">
      <Navbar />
      <Hero />
      
      <div className="splash-text-container text-center my-4"> {/* Reduced margin */}
        <h2 className="text-[var(--primary)] text-4xl font-bold">
          BON PLAN
        </h2>
      </div>

      <Carousel />
      <Services />
      <Stats />
      <FAQ />
      <SocialLinks />

      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed bottom-5 right-5 w-12 h-12 bg-[var(--primary)] text-[var(--dark)] flex items-center justify-center cursor-pointer z-[1000] shadow-lg transition-all duration-300 hover:scale-110 rounded-full"
        aria-label="Open chatbot"
      >
        <MessageCircle />
      </button>

      <ChatBot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}

export default App;
