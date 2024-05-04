import { useEffect } from 'react';
import css from './Modal.module.css';
const Modal = ({ isOpen, onClose }) => {
  const onWrapperClick = e => {
    if (e.target.classList.contains(css.modal_wrapper)) {
      onClose();
    }
  };
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={css.overlay} onClick={onWrapperClick}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
