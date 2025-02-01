import React from 'react';
import { X } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-[90px] right-5 w-[90vw] md:w-[350px] h-[80vh] md:h-[500px] bg-[var(--dark)] border border-[var(--primary)] rounded-lg shadow-xl z-[1000] overflow-hidden left-[50%] md:left-auto transform translate-x-[-50%] md:translate-x-0">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--dark)] flex items-center justify-center cursor-pointer z-[1002]"
      >
        <X size={20} />
      </button>
      <iframe
        src="https://spring-chatbot-customer-service-assistant.hf.space"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default ChatBot;
