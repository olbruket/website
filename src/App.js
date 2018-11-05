import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MemberSignup from './components/MemberSignup';

import './App.css';

const App = () => (
  <div>
    <Switch>
      <Route exact path ="/" component={ Home } />
      <Route path="/signup" component={ MemberSignup } />
    </Switch>
  </div>

)

export default App;
