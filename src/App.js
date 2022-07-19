import FavoritosPage from './pages/FavoritosPage';
import PeliculasPage from './pages/PeliculasPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/peliculas" >
              <PeliculasPage />
            </Route>
            <Route exact path="/favoritos" >
              <FavoritosPage />
            </Route>
          </Switch>
          <Route exact path="/" render={() => <Redirect to="/peliculas" />} />
          {/* <Route exact path="/" element={<Navigate to="/peliculas" />} /> */}
          {/* <Route path="/pelicula" element={<FavoritosPage/>} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
