import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import NavBar from './NavBar.js';
import Home from './Home.js';
import About from './About.js';
import Cats from './Cats.js';
import OneCat from './OneCat.js';
import Dogs from './Dogs.js';
import OneDog from './OneDog.js';

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
      },
      dogToys: {
        'Skyler': ['balls', 'shoes'],
        'Wingnut': ['cheese', 'bones', 'cats'],
        'Killah': ['shoes', 'children'],
        'Neon': ['rope', 'squirrels']
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
          <Route path="/dogs/" render={(props) => {
              return <Dogs dogList={Object.keys(this.state.dogToys)} {...props}/>
            }}/>
          <Route path="/cats/:catName" render={(props) => {
              return <OneCat toys={this.state.catToys} {...props} />
            }} />
          <Route path="/dogs/:dogName" render={(props) => {
              return <OneDog toys={this.state.dogToys} {...props} />
            }} />

        </div>
      </Router>
    );
  }
}

export default App;
