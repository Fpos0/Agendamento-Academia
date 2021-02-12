import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Confirmed from '../pages/Confirmed';
// import Repository from '../pages/Repository';
// tudo que vier dps do /repository/ eh o parametro ":repository", o + serve p informar isso
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/confirmed" exact component={Confirmed} />
    {/* <Route path="/repositories/:repository+" component={Repository} /> */}

  </Switch>
);

export default Routes;
