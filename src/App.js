import React, { Component } from 'react';
import Header from './components/Header';
import Demo from './components/Demo';

class App extends Component {
  static displayName = "App";

  render() {
    return (
      <div>
        <Header />
        <Demo />
      </div>
    );
  }
}

export default App;
