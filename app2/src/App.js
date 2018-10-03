import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

	constructor() {

	super(); //super method of javascript is req before creating any state
	this.state = {
			count:0 //property for this state. you can add as many properties to the state
			}; //creating object of the state.
		}

	btnClick()
	{
		this.setState(
			{

		count:this.state.count +1

				}
				);
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
					<h3 className="App-subtitle"> The Count App</h3>
        </header>



	<div>
	<h1>{this.props.headerText}</h1>

	<h2>Value of count is : {this.state.count}</h2>
	<br />
	<button onClick={this.btnClick.bind(this)}>count</button>
	</div>

      </div> //App closes
    );
  }
}

export default App;
