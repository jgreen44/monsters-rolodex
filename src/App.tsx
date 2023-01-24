import './App.css';

import * as React from 'react';
import { useEffect, useState } from 'react';

import { IMonster } from './components/card/types';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { IEvent } from './types';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: IMonster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event: IEvent) => {
    setSearchField(event.target.value.toLowerCase);
  };

  return (
    <div className="App">
      <h1 className={'app-title'}>Monster's Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
