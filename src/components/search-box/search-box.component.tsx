import './search-box.styles.css';

import React, { Component } from 'react';

import { ISearchBox } from './types';

class SearchBox extends Component<ISearchBox> {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
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
  }
}

export default SearchBox;
