import { setPagination } from '../../Redux/Campers/camperReduser';
import { selectCampers, selectPagination } from '../../Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreBtn.module.css';
const LoadMoreBtn = () => {
  const campers = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    const nextPage = pagination.page + 1;
    dispatch(setPagination({ ...pagination, page: nextPage }));
  };
  return (
    <div>
      {campers.length < pagination.page * pagination.limit ? (
        <p>No more campers left</p>
      ) : (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
