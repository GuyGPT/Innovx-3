import React from 'react';
import { Facebook, Send, Twitter, Phone } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="social-links text-center py-8 px-4 bg-[var(--dark)] border-t border-[var(--primary)]">
      <div className="social-icons flex justify-center gap-6">
        <a
          href="https://facebook.com"
          className="text-[var(--primary)] text-2xl hover:scale-110 transition-transform"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          href="https://t.me"
          className="text-[var(--primary)] text-2xl hover:scale-110 transition-transform"
          aria-label="Telegram"
        >
          <Send />
        </a>
        <a
          href="https://x.com"
          className="text-[var(--primary)] text-2xl hover:scale-110 transition-transform"
          aria-label="X"
        >
          <Twitter />
        </a>
        <a
          href="https://wa.me"
          className="text-[var(--primary)] text-2xl hover:scale-110 transition-transform"
          aria-label="Whatsapp"
        >
          <Phone />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
