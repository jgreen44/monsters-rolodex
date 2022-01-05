import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Frankenstein',
        },
        {
          id: 2,
          name: 'Dracula',
        },
        {
          id: 3,
          name: 'Zombie',
        },
      ],
    };
  }

  // called the first time the component is rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState());
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }
}

export default App;
