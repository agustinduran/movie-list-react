import { Navigate, Route, Routes } from 'react-router-dom';
import FavoritosPage from '../pages/FavoritosPage';
import PeliculasPage from '../pages/PeliculasPage';

export const AppRouter = () => {
  return (
    <>
      <div className="container-fluid">
        <Routes>
            <Route path="peliculas" element={<PeliculasPage/>} />
            <Route path="favoritos" element={<FavoritosPage/>} />
            <Route path="/" element={<Navigate to="/peliculas" />} />
            {/* <Route path="/pelicula" element={<FavoritosPage/>} /> */}
        </Routes>
      </div>
    </>
  )
}
