import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Table } from 'tinper-bee';

@observer
class Standard extends Component{
  render () {
    return (
      <Row>
        规范
      </Row>
    )
  }
}

export default Standard;
