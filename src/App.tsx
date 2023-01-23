import './App.css';

import * as React from 'react';
import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import { IMonster } from './components/card-list/types';
import SearchBox from './components/search-box/search-box.component';
import { IEvent } from './types';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState(() => {
          return { monsters: users };
        });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log(this.state);
      });
  }

  onSearchChange = (event: IEvent) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster: IMonster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'search-box'} />
        <CardList monsters={filteredMonsters} />
        {filteredMonsters.map((monster: IMonster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
