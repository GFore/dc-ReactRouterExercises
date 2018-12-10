import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import NavBar from './NavBar.js';
import Home from './Home.js';
import About from './About.js';
import Cats from './Cats.js';
import OneCat from './OneCat.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/cats/" component={Cats} />
          <Route path="/cats/:catName" component={OneCat} />

        </div>
      </Router>
    );
  }
}

export default App;
