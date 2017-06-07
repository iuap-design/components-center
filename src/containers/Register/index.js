import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Table } from 'tinper-bee';

@observer
class Register extends Component{
  render () {
    return (
      <Row>
        注册
      </Row>
    )
  }
}

export default Register;
