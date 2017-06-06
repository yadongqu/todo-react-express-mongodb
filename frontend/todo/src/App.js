import React, { Component } from 'react';

import './App.css';
import Title from "./components/Title";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="todos" />
        <List />
      </div>
    );
  }
}

export default App;
