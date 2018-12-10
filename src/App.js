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

  constructor(props) {
    super(props);
    this.state = {
      catList: ['Oakley', 'Milla', 'Whisper', 'Neo', 'Oreo'],
      catToys: {
        'Oakley': ['mice', 'hair'],
        'Milla': ['cheese', 'string'],
        'Whisper': ['balls', 'puppy', 'icicles'],
        'Neo': ['ice', 'mice']
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route
            path="/cats/"
            render={(props) => {
              return <Cats catList={Object.keys(this.state.catToys)} {...props}/>
            }}
          />
          <Route path="/cats/:catName" render={(props) => {
              return <OneCat toys={this.state.catToys} {...props} />
            }} />

        </div>
      </Router>
    );
  }
}

export default App;
