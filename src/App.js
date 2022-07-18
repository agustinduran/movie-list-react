import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import PeliculasListado from './Components/PeliculasListado';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [consultaBusqueda, setConsultaBusqueda] = useState('');

  const obtenerPeliculas = async (consultaBusqueda) => {
    const url = `https://www.omdbapi.com/?apikey=52977ea8&s=${consultaBusqueda}&page=1`;

    const response = await fetch(url);
    const resultJson = await response.json();

    if (resultJson.Response === "True" && resultJson.Search)
      setPeliculas(resultJson.Search);
    else
      setPeliculas([]);
  }

  useEffect(() => {
    obtenerPeliculas(consultaBusqueda);
  }, [consultaBusqueda]);

  return (
    <div className="container-fluid">
      <NavBar consultaconsultaBusqueda={consultaBusqueda} setConsultaBusqueda={setConsultaBusqueda}/>
      <PeliculasListado peliculas={peliculas}/>
    </div>
  );
}

export default App;
