import css from './ListOfCampers.module.css';
import {
  selectVehicleType,
  selectCampers,
  selectFilters,
  selectLocation,
  selectPagination,
} from '../../Redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  IoBedOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { FaStar, FaRegHeart, FaGasPump } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getCampers } from 'Services/api';
import Modal from 'components/Modal/Modal';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
const ListOfCampers = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const campers = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const location = useSelector(selectLocation);
  const equipmentFilters = useSelector(selectFilters);
  const vehicleType = useSelector(selectVehicleType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers({ location, equipmentFilters, vehicleType }));
  }, [dispatch, location, equipmentFilters, vehicleType]);

  return (
    <div className={css.capmresContainer}>
      <ul className={css.listCapmers}>
        {campers.slice(0, pagination.page * pagination.limit).map(campers => (
          <div key={campers._id} className={css.camperCard}>
            <img
              src={campers.gallery[0]}
              alt="camper"
              className={css.camperPhoto}
            />
            <div className={css.infoBox}>
              <div>
                <div className={css.header}>
                  <h3 className={css.camperName}>
                    {campers.name.slice(0, 23)}
                  </h3>
                  <div className={css.priceWrapper}>
                    <p className={css.price}>{campers.price}</p>
                    <button type="button" className={css.notFavoriteBtn}>
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <div className={css.ratingWrap}>
                  <div className={css.rating}>
                    <FaStar className={css.starIcon} />
                    <p className={css.reviews}>
                      {campers.rating}({campers.reviews.length} Reviews)
                    </p>
                  </div>
                  <div className={css.locationWrap}>
                    <IoLocationOutline />
                    <p className={css.location}>{campers.location}</p>
                  </div>
                </div>
              </div>
              <p className={css.description}>
                {campers.description.slice(0, 62)}...
              </p>
              <ul className={css.options}>
                <li className={css.optionItem}>
                  <IoPeopleOutline className={css.optionIcon} />
                  <p className={css.optionDescription}>
                    {campers.adults} adults
                  </p>
                </li>
                <li className={css.optionItem}>
                  <IoPeopleOutline className={css.optionIcon} />
                  <p className={css.optionDescription}>
                    {campers.transmission}
                  </p>
                </li>
                <li className={css.optionItem}>
                  <FaGasPump className={css.optionIcon} />
                  <p className={css.optionDescription}>{campers.engine}</p>
                </li>
                <li className={css.optionItem}>
                  <IoPeopleOutline className={css.optionIcon} />
                  <p className={css.optionDescription}>kitchen</p>
                </li>
                <li className={css.optionItem}>
                  <IoBedOutline className={css.optionIcon} />
                  <p className={css.optionDescription}>
                    {campers.details.beds} beds
                  </p>
                </li>
                <li className={css.optionItem}>
                  <IoPeopleOutline className={css.optionIcon} />
                  <p className={css.optionDescription}>AC</p>
                </li>
              </ul>
              <button
                type="button"
                className={css.showMoreBtn}
                onClick={openModal}
              >
                Show more
              </button>
              {isOpenModal ? (
                <Modal onClose={closeModal} campers={campers} />
              ) : null}
            </div>
          </div>
        ))}
      </ul>
      <LoadMoreBtn />
    </div>
  );
};
export default ListOfCampers;
