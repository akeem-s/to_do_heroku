import React, { Component } from 'react';
import './App.css';
import Main from './components/main/Main'
import Header from './components/common/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
