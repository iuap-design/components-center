import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Header } from '../../components';

@inject('appStore') @observer
class App extends Component {

    onReset = () => {
        this.props.appStore.resetTimer();
    }

    render() {
        return (
            <div>
                <DevTools />
                <Header />
                {
                    this.props.children
                }
            </div>
        );
    }

};

export default App;
