import React from "react";
import PeliculasListado from '../components/PeliculasListado';
import { useState } from 'react';
import Layout from "../components/Layout";
import NavBar from "../components/NavBar"; 
import AgregarFavorito from "../components/AgregarFavorito";

const PeliculasPage = (props) => {
    const [peliculas, setPeliculas] = useState([]);
    const { favorito, setFavorito } = props;

    const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;

    const obtenerPeliculas = async (consultaBusqueda) => {
        const url = `https://www.omdbapi.com/?apikey=${REACT_APP_APIKEY}&s=${consultaBusqueda}&page=1`;
    
        const response = await fetch(url);
        const resultJson = await response.json();
    
        if (resultJson.Response === "True" && resultJson.Search)
          setPeliculas(resultJson.Search);
        else
          setPeliculas([]);
    }

    const agregarFavoritoHandler = (pelicula) => {
        const newFavoritoList = [...favorito, pelicula];
        setFavorito(newFavoritoList);
    }

    return (
        <>
            <NavBar mostrarBuscador={ true } callback={ obtenerPeliculas } />
            <Layout>
                <PeliculasListado 
                    peliculas={ peliculas }
                    favoritoComponente={ AgregarFavorito }
                    favoritoHandler={ agregarFavoritoHandler }/>
            </Layout>
        </>
    );
}

export default PeliculasPage;