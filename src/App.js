import React, { Component } from 'react';
import './App.css';
import Header from './Frontend/Components/Header/Header';
import About from './Frontend/Components/About/About';
import Projects from './Frontend/Components/Projects/Projects';
import Skills from './Frontend/Components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;
