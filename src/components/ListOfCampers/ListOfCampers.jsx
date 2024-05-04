import css from './ListOfCampers.module.css';
import {
  selectVehicleType,
  selectCampers,
  selectFilters,
  selectLocation,
  selectPagination,
} from '../../Redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCampers } from 'Services/api';
import Modal from 'components/Modal/Modal';
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
          <li className={css.camperItem} key={campers._id}>
            <img
              className={css.camperPhoto}
              src={campers.gallery[0]}
              alt="camper"
            />
            <div className={css.campersDescription}>
              <h2>{campers.name}</h2>
              <p>€{campers.price}</p>
              <p>{campers.location}</p>
              <button className={css.showMoreBtn} onClick={openModal}>
                Show more
              </button>
              {isOpenModal ? <Modal onClose={closeModal} /> : null}
            </div>
            {/* <button className={css.favoriteBtn} type="button"></button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCampers;
