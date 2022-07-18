import React from 'react';

const PeliculasListado = (props) => {
    return (
        <>
            {props.peliculas.map((pelicula, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={pelicula.Poster} alt={pelicula.Title} ></img>
                </div>
            ))}
        </>
    );
}

export default PeliculasListado;