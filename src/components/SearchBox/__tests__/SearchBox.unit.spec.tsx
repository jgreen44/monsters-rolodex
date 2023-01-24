import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBox } from '../index';

describe('SearchBox component', () => {
  it('should render correctly', () => {
    const placeholder = 'Search for monsters';
    const className = 'custom-class';
    const onChangeHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBox placeholder={placeholder} className={className} onChangeHandler={onChangeHandler} />
    );
    const input = getByPlaceholderText(placeholder);

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(`search-box ${className}`);
  });

  it('should call the onChangeHandler when the input value is changed', () => {
    const placeholder = 'Search for monsters';
    const className = 'custom-class';
    const onChangeHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBox placeholder={placeholder} className={className} onChangeHandler={onChangeHandler} />
    );
    const input = getByPlaceholderText('Search for monsters');

    fireEvent.change(input, { target: { value: 'Frank' } });
    expect(onChangeHandler).toHaveBeenCalled();
  });
});