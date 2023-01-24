import './card.styles.css';

import React, { Component } from 'react';

import { IMonster } from './types';

class Card extends Component<IMonster> {
  render() {
    const { name, email, id } = this.props;
    return (
      <div className={'card-container'} key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    );
  }
}

export default Card;
