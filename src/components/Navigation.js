import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Toolbar, Button, Container, withStyles } from '@material-ui/core';

import logo from '../logo.svg';

const styles = {
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  }
}

const Navigation = ({ children, classes }) => (
  <div>
    <Container maxWidth="lg">
      <Toolbar
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Button
          to={'/'}
          component={NavLink}
        >
        </Button>
        <Button
          to={'/signup'}
          component={NavLink}
        >
          Become a member!
        </Button>
      </Toolbar>
    </Container>
    <div style={ {paddingTop: '5em' }}>
      {children}
    </div>
  </div>
)

Navigation.propTypes = {
  children: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigation)