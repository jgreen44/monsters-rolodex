import './App.css';

import * as React from 'react';
import { useEffect, useState } from 'react';

import { IMonsterData } from './components/Card/types';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';
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
    const newFilteredMonsters = monsters.filter((monster: IMonsterData) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event: IEvent) => {
    setSearchField(event.target.value.toLowerCase());
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
