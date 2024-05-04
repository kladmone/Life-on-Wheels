import FormFilters from 'components/FormFilters/FormFilters';
import css from './catalog.module.css';
import ListOfCampers from 'components/ListOfCampers/ListOfCampers';

const Catalog = () => {
  return (
    <div className={css.catalogContainer}>
      <FormFilters />
      <ListOfCampers />
    </div>
  );
};

export default Catalog;
