import './card-list.styles.css';

import React from 'react';

import { Card } from '../card';
import { IMonster } from '../card/types';
import { ICardList } from './types';

export const CardList = ({ monsters }: ICardList) => {
  return (
    <div className={'card-list'}>
      {monsters.map((monster: IMonster) => {
        return <Card {...monster} key={monster.id} />;
      })}
    </div>
  );
};

CardList.displayName = 'CardList';
