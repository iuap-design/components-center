import {Provider} from 'mobx-react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import * as stores from '../stores';
import {App, Login, Homepage, Standard, Register, List} from '../containers';


export default (
  <Provider { ...stores}>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path="/login" component={Login}/>
        <Route path="/standard" component={Standard}/>
        <Route path="/register" component={Register}/>
        <Route path="/list" component={List}/>
      </Route>
    </Router>
  </Provider>
)

