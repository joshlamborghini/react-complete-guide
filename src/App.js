import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Josh', age: 33 },
      { name: 'Chris', age: 30 },
      { name: 'Dave', age: 59 }
    ],
    // otherState: 'some other value'

  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // dont do this this.state.persons[0].name = 'Josh';
    this.setState({
      persons: [
      { name: 'Joshistheman', age: 33 },
      { name: 'Chris', age: 30 },
      { name: 'Dave', age: 50 }
    ]

    } )
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Kiting</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1','', 'does this work now?'));
  }
}

export default App;
