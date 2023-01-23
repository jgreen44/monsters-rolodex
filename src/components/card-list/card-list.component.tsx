import React, { Component } from 'react';

import { Monster, MonsterProps } from './types';

class CardList extends Component<MonsterProps> {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster: Monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
