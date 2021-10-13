import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Basket from './pages/Basket/Basket';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/basket" component={Basket} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
