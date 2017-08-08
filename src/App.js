import React, { Component } from 'react';
import Header from './components/Header';
<<<<<<< HEAD

class App extends Component {
  static displayName = "App";
=======
import Demo from './components/Demo';

class App extends Component {
  static displayName = 'App';
>>>>>>> d45443141f1c516d15b4b1fabecb197b84a64b40

  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
=======
        <Demo />
>>>>>>> d45443141f1c516d15b4b1fabecb197b84a64b40
      </div>
    );
  }
}

export default App;
