/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useParams } from "react-router-dom";
import CampoBuscar from './CampoBuscar.js';

const NavBar = (props) => {
    const { children, mostrarBuscador, callback } = props;
    
    return (
        <div className="row d-flex align-items-center mb-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Películas Braintly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/peliculas"
                                style={{ textDecoration: "none", color: "white" }}
                            >Películas</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/favoritos"
                                style={{ textDecoration: "none", color: "white" }}
                            >Favoritos</Link>
                        </li>
                    </ul>
                </div>
                { mostrarBuscador && <CampoBuscar callback={ callback } /> }
            </nav>
            <div className="section">
                {children}
            </div>
        </div>
    );
}

export default NavBar;