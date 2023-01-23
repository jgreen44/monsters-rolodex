import './App.css';

import * as React from 'react';
import { Component } from 'react';

import logo from './logo.svg';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'jason',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'jason', lastName: 'green' },
                  };
                },
                () => {
                  // eslint-disable-next-line no-console
                  console.log(this.state);
                },
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
