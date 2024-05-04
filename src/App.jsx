import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/homePage/homePage.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import Catalog from 'Pages/Catalog/Catalog.jsx';
import Favorite from 'Pages/Favorite/Favorite.jsx';
export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
