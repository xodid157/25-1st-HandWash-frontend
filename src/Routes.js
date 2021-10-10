import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
