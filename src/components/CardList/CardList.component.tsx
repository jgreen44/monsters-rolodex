import './CardList.styles.css';

import React from 'react';

import { Card } from '../Card';
import { IMonsterData } from '../Card/types';
import { ICardList } from './types';

export const CardList = ({ monsters }: ICardList) => {
  return (
    <div className={'card-list'}>
      {monsters.map((monster: IMonsterData) => {
        return <Card {...monster} key={monster.id} />;
      })}
    </div>
  );
};

CardList.displayName = 'CardList';
