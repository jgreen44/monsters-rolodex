import './App.css';

import * as React from 'react';
import { Component } from 'react';

import { IMonster } from './components/card/types';
import CardList from './components/card-list/card-list.component';
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
    // eslint-disable-next-line no-console
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event: IEvent) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster: IMonster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className={'app-title'}>Monster's Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
