import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    
  } 

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch name</button>
        <Person name="Max" age="28"/> 
        <Person name="Manu" age="29">My Hobbies: Racing </Person> 
        <Person name="Rick" age="29"/> 
      </div>
    );
  }
}

export default App;
