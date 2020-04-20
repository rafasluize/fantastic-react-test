import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DefaultLayoutRoute from './templates/main/Body';
import Home from './pages/home/Home';
import Publication from './pages/publication/Publication';

export default function Routes() {

  return (
    <Router>
      <Switch>
        <DefaultLayoutRoute exact path="/" component={ Home } />
        <DefaultLayoutRoute exact path="/publication" component={ Publication } />
      </Switch>
    </Router>
  )
}