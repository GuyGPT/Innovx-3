import React from 'react';

interface WhatsAppPopupProps {
  onClose: () => void;
}

const WhatsAppPopup = ({ onClose }: WhatsAppPopupProps) => {
  const joinWhatsApp = () => {
    // Replace with the actual WhatsApp group link
    window.open('https://chat.whatsapp.com/your-group-link', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--dark)] p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg md:text-xl text-[var(--light)] mb-4">
          Cliquez pour rejoindre notre groupe WhatsApp d'informations et d'opportunités
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={joinWhatsApp}
            className="bg-[var(--primary)] text-[var(--dark)] px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Rejoindre
          </button>
          <button
            onClick={onClose}
            className="bg-[var(--primary)] text-[var(--dark)] px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
