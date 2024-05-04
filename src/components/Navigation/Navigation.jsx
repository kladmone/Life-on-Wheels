import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink to="/" className={css.navBtn}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.navBtn}>
          Catalog
        </NavLink>
        <NavLink to="/favorite" className={css.navBtn}>
          Favorite
        </NavLink>
      </header>
    </div>
  );
};

export default Navigation;
