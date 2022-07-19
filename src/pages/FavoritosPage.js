import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

const FavoritosPage = (props) => {
    return (
        <>
            <NavBar mostrarBuscador={ false } />
            <Layout>
                <h1>FavoritosPage</h1>
            </Layout>
        </>
    );
}

export default FavoritosPage;