import React from 'react';
import CampoBuscar from './CampoBuscar.js';

const NavBar = (props) => {
    return (
        <div className="row d-flex align-items-center mb-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Películas Braintly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Favoritos</a>
                        </li>
                    </ul>
                </div>
                <CampoBuscar consultaBusqueda={props.consultaBusqueda} setConsultaBusqueda={props.setConsultaBusqueda} />
            </nav>
        </div>
    );
}

export default NavBar;