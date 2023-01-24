import { getByText, render} from '@testing-library/react';
import { Card } from '../index';

const mockMonster = {
  id: '1',
  name: 'Frankenstein',
  email: 'frank@monster.com',
  phone: '555-555-5555',
};
describe('Card Component', () => {
  it('renders the name, email, phone and image', () => {
    const { getByAltText, getByText } = render(<Card {...mockMonster}  />);
    const img = getByAltText(`monster ${mockMonster.name}`);

    expect(img).toBeInTheDocument()
    expect(getByText(mockMonster.name)).toBeInTheDocument();
    expect(getByText(mockMonster.email)).toBeInTheDocument();
    expect(getByText(mockMonster.phone)).toBeInTheDocument();
  });

  it('should have the correct className', () => {
    const { container } = render(<Card {...mockMonster} />);
    expect(container.firstChild).toHaveClass('card-container');
  });
});
