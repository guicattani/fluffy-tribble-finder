import React, { Component } from "react";
import Navbar from './components/layout/Navbar.js'
import "./App.css";

class App extends Component {
  render() {
    const name = "john";

    return (
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github' />
        <h1>Hello {name} </h1>
      </div>
    );
  }
}

export default App;
