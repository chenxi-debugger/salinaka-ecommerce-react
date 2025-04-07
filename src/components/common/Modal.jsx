import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onRequestClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
