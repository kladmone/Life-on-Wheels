import css from './FormFolters.module.css';
import sprite from 'Sprite.svg';

const FormFilters = () => {
  return (
    <aside className={css.sidebar}>
      <form name="filters">
        <p className={css.location}>Location</p>
        {/* <svg width="18" height="20">
          <use
            className={css.mapPinSvg}
            xlinkHref={`${sprite}#icon-map-pin`}
          ></use>
        </svg> */}
        <input type="text" placeholder="City" className={css.locationInput} />
        <p className={css.filters}>Filters</p>
        <p className={css.equipment}>Vehicle equipment</p>
        <div className={css.selectFilters}>
          <input
            id="ac"
            type="checkbox"
            value="mechanic"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="ac" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-Automatic`} />
              </svg>
              <p className={css.filterType}>AC</p>
            </span>
          </label>
          <input
            id="Automatic"
            type="checkbox"
            value="mechanic"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Automatic" className={css.filter_check}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-Automatic`} />
              </svg>
              <p className={css.filterType}>Automatic</p>
            </span>
          </label>
          <input
            id="Kitchen"
            type="checkbox"
            value="mechanic"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Kitchen" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-Kitchen`} />
              </svg>
              <p className={css.filterType}>Kitchen</p>
            </span>
          </label>
          <input
            id="TV"
            type="checkbox"
            value="mechanic"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="TV" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-TV`} />
              </svg>
              <p className={css.filterType}>TV</p>
            </span>
          </label>
          <input
            id="Shower"
            type="checkbox"
            value="mechanic"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Shower" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-Shower`} />
              </svg>
              <p className={css.filterType}>Shower/WC</p>
            </span>
          </label>
        </div>
        <p className={css.equipment}>Vehicle type</p>
        <div className={css.selectFilters}>
          <input
            id="Van"
            type="radio"
            name="vehicle_type"
            value="Van"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Van" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-camper-Van`} />
              </svg>
              <p className={css.filterType}>Van</p>
            </span>
          </label>
          <input
            id="Fully"
            type="radio"
            name="vehicle_type"
            value="Fully Integrated"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Fully" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-camper-Fully`} />
              </svg>
              <p className={css.filterType}>Fully Integrated</p>
            </span>
          </label>
          <input
            id="Alcove"
            type="radio"
            name="vehicle_type"
            value="Alcove"
            className={`${css.visuallyHidden} ${css.input}`}
          />
          <label htmlFor="Alcove" className={css.filterCheck}>
            <span className={css.CheckSvg}>
              <svg className={css.filterIcon}>
                <use xlinkHref={`${sprite}#icon-camper-Alcove`} />
              </svg>
              <p className={css.filterType}>Alcove</p>
            </span>
          </label>
        </div>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </aside>
  );
};

export default FormFilters;
