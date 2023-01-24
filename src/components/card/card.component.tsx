import './card.styles.css';

import React from 'react';

import { IMonster } from './types';

export const Card = ({ id, name, email, phone }: IMonster) => {
  return (
    <div className={'card-container'} key={id}>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
    </div>
  );
};

Card.displayName = 'Card';
