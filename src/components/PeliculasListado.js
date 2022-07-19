import React from 'react';

const PeliculasListado = (props) => {
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {props.peliculas.map((pelicula, index) => (
                <div className='col' key={`cart-${index}`} >
                    <div className='card'>
                        <img src={pelicula.Poster} alt={pelicula.Title} ></img>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PeliculasListado;