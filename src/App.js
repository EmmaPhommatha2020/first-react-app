import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;