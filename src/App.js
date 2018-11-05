import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MemberSignup from './components/MemberSignup';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path ="/" component={ Home } />
          <Route path="/signup" component={ MemberSignup } />
        </Switch>
      </div>
    );
  }
}

export default App;
