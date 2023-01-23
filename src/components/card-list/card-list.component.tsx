import React, { Component } from 'react';

import { ICardList, IMonster } from './types';

class CardList extends Component<ICardList> {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster: IMonster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
