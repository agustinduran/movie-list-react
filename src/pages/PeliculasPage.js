import React from "react";
import PeliculasListado from '../components/PeliculasListado';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';

const PeliculasPage = (props) => {
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
        <>
            <NavBar consultaconsultaBusqueda={consultaBusqueda} setConsultaBusqueda={setConsultaBusqueda} mostrarBuscador={true}/>
            <PeliculasListado peliculas={peliculas}/>
        </>
    );
}

export default PeliculasPage;