import React, { Component } from "react";
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import "./App.css";

class App extends Component {
  render() {
    const name = "john";

    return (
      <div className="App">
        <Navbar />
        <UserItem />
        <h1>Hello {name} </h1>
      </div>
    );
  }
}

export default App;
