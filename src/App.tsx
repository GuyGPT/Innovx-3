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
    <div className="min-h-screen bg-[var(--dark)] text-[var(--light)]">
      <Navbar />
      <Hero />
      
      <div className="splash-text-container text-center my-8">
        <h2 className="splash-text text-[var(--primary)] text-4xl font-bold">
          BON PLAN
        </h2>
      </div>

      <Carousel />
      <Services />
      <Stats />
      <FAQ />
      <SocialLinks />

      <button
        onClick={toggleTheme}
        className="theme-toggle fixed bottom-5 left-5 w-12 h-12 rounded-full bg-[rgba(255,230,0,0.1)] border border-[var(--primary)] flex items-center justify-center cursor-pointer z-[1001] shadow-lg transition-all duration-300 hover:bg-[rgba(255,230,0,0.2)] hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Moon className="stroke-yellow-400" />
        ) : (
          <Sun className="stroke-black" />
        )}
      </button>

      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-[var(--primary)] text-[var(--dark)] flex items-center justify-center cursor-pointer shadow-lg z-[1000] transition-all duration-300 hover:scale-110"
        aria-label="Open chatbot"
      >
        <MessageCircle />
      </button>

      <ChatBot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      <div id="install-prompt" className="hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[var(--dark)] p-4 rounded-lg shadow-lg z-[1000] border border-[var(--primary)] text-[var(--light)]">
        <p>Installez l'application InnovX pour un accès rapide</p>
        <button className="btn bg-[var(--primary)] text-[var(--dark)] px-4 py-2 rounded mt-2">
          Installer
        </button>
      </div>
    </div>
  );
}

export default App;
