import React from "react";
import { useEffect, useState } from 'react';

const CampoBuscar = (props) => {
    const [consultaBusqueda, setConsultaBusqueda] = useState('');

    const { callback } = props;

    useEffect(() => {
      callback(consultaBusqueda);
    }, [consultaBusqueda]);

    return (
        <div className="col col-sm-4">
            <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                value={consultaBusqueda}
                onChange={(event) => setConsultaBusqueda(event.target.value)}
            />
        </div>
    );
}

export default CampoBuscar;