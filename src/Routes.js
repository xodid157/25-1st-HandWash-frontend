import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import Footer from './components/footer/Footer';
import Favorites from './pages/Favorites/Favorites';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/Product/:id" component={Product} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
