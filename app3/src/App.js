import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {

    super();
    this.state = {
      data: ''
                  }
  }

  updatedData(e){

    this.setState({data: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h2>Say hi to the forms</h2>
          <input type="text" value = {this.state.data} onChange ={this.updatedData.bind(this)} />
        <h4> Captured Text : {this.state.data}</h4>
      </div>
    );
  }
}

export default App;
