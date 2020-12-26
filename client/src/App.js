import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BbsList from './components/Bbs/BbsList';
import BbsItemDetail from './components/Bbs/BbsItemDetail';
import BbsModified from './components/Bbs/BbsModified';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={BbsList} />
        <Route path="/item" component={BbsItemDetail} />
        <Route path="/modified" component={BbsModified} />
      </Router>
    )
  }
}

export default App;
