import React from "react";

const CampoBuscar = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                value={props.consultaBusqueda}
                onChange={(event) => props.setConsultaBusqueda(event.target.value)}
            />
        </div>
    );
}

export default CampoBuscar;