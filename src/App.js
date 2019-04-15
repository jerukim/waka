import React, { Component } from 'react';

import './App.css';

import Navbar from './navbar';

const text = [
  'the',
  'quick',
  'brown',
  'fox',
  'jumped',
  'over',
  'the',
  'lazy',
  'dog',
  'the',
  'quick',
  'brown',
  'fox',
  'jumped',
  'over',
  'the',
  'lazy',
  'dog',
  'the',
  'quick',
  'brown',
  'fox',
  'jumped',
  'over',
  'the',
  'lazy',
  'dog',
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App">
          {text.map(str => (
            <h1>{str}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
