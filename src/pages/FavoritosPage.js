import React, { useEffect } from "react";
import EliminarFavorito from "../components/EliminarFavorito";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import PeliculasListado from "../components/PeliculasListado";

const FavoritosPage = (props) => {
    const { favorito, setFavorito, guardarEnLocalStorage } = props;

    const eliminarFavoritoHandler = (pelicula) => {
        const newFavoritoList = favorito.filter(
			(favorito) => favorito.imdbID !== pelicula.imdbID
		);

		setFavorito(newFavoritoList);
        guardarEnLocalStorage(newFavoritoList);
    }

    useEffect(() => {
        const peliculasFavoritas = JSON.parse(localStorage.getItem('react-peliculas-favoritas')) || [];
        setFavorito(peliculasFavoritas);
    }, []);

    return (
        <>
            <NavBar mostrarBuscador={ false } />
            <Layout>
                <PeliculasListado 
                    peliculas={ favorito }
                    favoritoComponente={ EliminarFavorito }
                    favoritoHandler={ eliminarFavoritoHandler }
                    sinResultadosComponente={ () => <h2>No tiene películas en favoritos. Por favor, utiliza la sección Películas y agrege alguna a favoritos.</h2> } />
            </Layout>
        </>
    );
}

export default FavoritosPage;