import React from 'react';
import { render } from '@testing-library/react';
import { CardList } from '../index';

const mockMonsters = [
  {
    id: '1',
    name: 'Frankenstein',
    email: 'frank@monster.com',
    phone: '555-555-5555',
  },
  {
    id: '2',
    name: 'Dracula',
    email: 'dracula@monster.com',
    phone: '555-555-5556',
  },
  {
    id: '3',
    name: 'Zombie',
    email: 'zombie@monster.com',
    phone: '555-555-5557',
  },
];

describe('CardList component', () => {
  it('should render correctly', () => {
    const { getAllByTestId } = render(<CardList monsters={mockMonsters} />);
    const cards = getAllByTestId('card');

    expect(cards.length).toBe(mockMonsters.length);
    mockMonsters.forEach((monster, index) => {
      const card = cards[index];
      expect(card).toHaveTextContent(monster.name);
      expect(card).toHaveTextContent(monster.email);
      expect(card).toHaveTextContent(monster.phone);
    });
  });
});