import React from 'react';

const PeliculasListado = (props) => {
    const { favoritoHandler } = props;
    const FavoritoComponente = props.favoritoComponente;
    const SinResultadosComponente = props.sinResultadosComponente;

    return (
        <div className={ "row " + (props.peliculas.length > 0 ? 'rows-cols-1 row-cols-md-3 g-3': '') }>
            {
                props.peliculas.length > 0 
                ? props.peliculas.map((pelicula, index) => (
                        <div className='col' key={`cart-${index}`} >
                            <div className='image-container card'>
                                <img src={pelicula.Poster} alt={pelicula.Title} ></img>
                                <div 
                                    className="overlay d-flex align-items-center justify-content"
                                    onClick={() => favoritoHandler(pelicula)}>
                                    <FavoritoComponente/>
                                </div>
                            </div>
                        </div>
                    ))
                : <SinResultadosComponente/>
            }
        </div>
    );
}

export default PeliculasListado;