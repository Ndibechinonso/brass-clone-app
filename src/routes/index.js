import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Login from '../components/Login'
import Home from '../components/Home'
// import Nav from './components/Nav';

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={Welcome} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route path="*" component={() => <div>Not found</div>} />
  </Switch>
);

export default Routes;