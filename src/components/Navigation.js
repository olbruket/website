import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Button } from '@material-ui/core';

import logo from '../logo.svg';

const Navigation = ({ children }) => (
  <div>
    <AppBar>
      <Toolbar>
        <Button
          link
          to={'/'}
          component={NavLink}
        >
          <img src={logo} style={ {maxWidth: '7em' }}/>
        </Button>
        <Button
          link
          to={'/signup'}
          component={NavLink}
        >
          Become a member!
        </Button>
      </Toolbar>
    </AppBar>
    <div style={ {paddingTop: '5em' }}>
      {children}
    </div>
  </div>
)

Navigation.propTypes = {
  children: PropTypes.object.isRequired
}

export default Navigation