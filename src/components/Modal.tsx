import React from 'react';

interface ModalProps {
  src: string;
  onClose: () => void;
}

const Modal = ({ src, onClose }: ModalProps) => {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="modal-content relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer z-50"
        >
          &times;
        </button>
        <img src={src} alt="Enlarged" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Modal;
