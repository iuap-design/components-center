import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Table } from 'tinper-bee';

@observer
class PersonalPage extends Component{
  render () {
    return (
      <Row>
        个人主页
      </Row>
    )
  }
}

export default PersonalPage;
