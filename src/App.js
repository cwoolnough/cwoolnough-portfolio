import React, { Component } from 'react';
import './App.css';
import NavBar from './Frontend/Components/Header/NavBar/NavBar';
import Header from './Frontend/Components/Header/Header';
import About from './Frontend/Components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
