import './card-list.styles.css';

import React, { Component } from 'react';

import Card from '../card/card.component';
import { IMonster } from '../card/types';
import { ICardList } from './types';

class CardList extends Component<ICardList> {
  render() {
    const { monsters } = this.props;
    return (
      <div className={'card-list'}>
        {monsters.map((monster: IMonster) => {
          return <Card {...monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
