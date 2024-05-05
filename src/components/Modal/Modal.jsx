import { useEffect } from 'react';
import css from './Modal.module.css';
import { IoClose, IoLocationOutline } from 'react-icons/io5';
const Modal = ({ isOpen, onClose, campers }) => {
  const { name, rating, reviews, location, price, gallery, description } =
    campers;
  const onWrapperClick = e => {
    if (e.target.classList.contains(css.overlay)) {
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
        <div className={css.header}>
          <div className={css.modalHead}>
            <h3 className={css.camperName}>{name}</h3>
            <button
              type="button"
              className={css.modalCloseBtn}
              onClick={onClose}
            >
              <IoClose className={css.modalCloseIcon} />
            </button>
          </div>
          <div className={css.infoBox}>
            <div className={css.reviewLocation}>
              <div className={css.reviewWrap}>
                ⭐
                <p className={css.review}>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>
              <div className={css.location}>
                <IoLocationOutline />
                <p className={css.locationP}>{location}</p>
              </div>
            </div>
            <p className={css.price}>€{price}</p>
          </div>
        </div>
        <ul className={css.imageList}>
          {gallery.map((image, index) => (
            <li key={index}>
              <div
                className={css.image}
                style={{ backgroundImage: `url(${gallery[index]})` }}
              ></div>
            </li>
          ))}
        </ul>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
