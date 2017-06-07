import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { InputGroup, FormControl, Icon } from 'tinper-bee';

import './index.css';

@inject('homepageStore') @observer
class Search extends Component{

  render(){
    return (
      <div className="search text-center">
        <h2>查找组件</h2>
        <InputGroup simple className="search-input">
          <FormControl type="text" />
          <InputGroup.Button shape="border">
            <Icon type="uf-search" />
          </InputGroup.Button>
        </InputGroup>
      </div>
    )
  }
}

export default Search;
