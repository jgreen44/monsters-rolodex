import './SearchBox.styles.css';

import React from 'react';

import { ISearchBox } from './types';

export const SearchBox = ({ onChangeHandler, placeholder, className }: ISearchBox) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type={'search'}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

SearchBox.displayName = 'SearchBox';
