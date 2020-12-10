import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'; // !
import { Artist } from './Components/Artist';
import { TheMostFamousPicture } from './Components/TheMostFamousPicture';
import { PicturesGallery } from './Components/PicturesGallery';
import { NotFound } from './Components/NotFound';
import NavMenu from './Navigations/NavMenu';

function App() {

  //document.addEventListener("DOMContentLoaded", function() {alert("Перезагрузка")});

  return (
    <div className="App" id="app">
      <h1>App.js</h1>
      <Router>
        <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/" component={Artist}></Route>
          <Route path="/picture" component={TheMostFamousPicture}></Route>
          <Route path="/gallery/:id?" component={PicturesGallery}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
