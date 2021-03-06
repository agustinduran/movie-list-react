import FavoritosPage from './pages/FavoritosPage';
import PeliculasPage from './pages/PeliculasPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from 'react';
import { useState } from 'react';

function App() {
  const [favorito, setFavorito] = useState([]);

  const guardarEnLocalStorage = (items) => {
    localStorage.setItem('react-peliculas-favoritas', JSON.stringify(items));
  }

  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/peliculas" >
              <PeliculasPage favorito={favorito} setFavorito={setFavorito} guardarEnLocalStorage={guardarEnLocalStorage} />
            </Route>
            <Route exact path="/favoritos" >
              <FavoritosPage favorito={favorito} setFavorito={setFavorito} guardarEnLocalStorage={guardarEnLocalStorage} />
            </Route>
          </Switch>
          <Route exact path="/" render={() => <Redirect to="/peliculas" />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
