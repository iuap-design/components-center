import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import { Row, Con, Icon } from 'tinper-bee';
import { Search } from '../../components';
import classnames from 'classnames';
import './index.css';

@inject('homepageStore') @observer
class Homepage extends Component {

    render() {
        return (
            <Row>
              <Search />
            </Row>
        );
    }

};

export default Homepage;
