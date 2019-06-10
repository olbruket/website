import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import './App.css';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation>
      <Switch>
        <Route exact path ="/" component={ Home } />
        <Route exact path="/about" component={ About } />
      </Switch>
    </Navigation>
  </div>

)

export default App;
