import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import MemberSignup from './components/MemberSignup';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path ="/" component={Index} />
        <Route path="/signup" component={MemberSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
