import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginModal from './pages/LoginModal/LoginModal';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import Favorites from './pages/Favorites/Favorites';
import Product from './pages/Product/Product';
import ItemList from './pages/ItemList/Itemlist';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/itemList" component={ItemList} />
          <Route exact path="/login" component={LoginModal} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
