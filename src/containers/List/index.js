import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Table } from 'tinper-bee';

@observer
class List extends Component{
    render () {
        return (
            <Row>
              组件列表
            </Row>
        )
    }
}

export default List;
