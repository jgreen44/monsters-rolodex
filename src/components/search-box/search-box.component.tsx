import React, { Component } from 'react';

import { ISearchBox } from '../card-list/types';

class SearchBox extends Component<ISearchBox> {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input className={className} type={'search'} placeholder={placeholder} onChange={onChangeHandler} />
      </div>
    );
  }
}

export default SearchBox;
