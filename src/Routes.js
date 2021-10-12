import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import ItemList from './pages/ItemList/Itemlist';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={ItemList} />
          <Route exact path="/nav" component={Nav} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
