import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MemberSignup from './components/MemberSignup';

import './App.css';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation>
      <Switch>
        <Route exact path ="/" component={ Home } />
        <Route path="/signup" component={ MemberSignup } />
      </Switch>
    </Navigation>
  </div>

)

export default App;
