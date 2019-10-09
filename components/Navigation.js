import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Button, Container, withStyles } from '@material-ui/core';
import LongMenu from './Menu';

const styles = {
  toolbarSecondary: {
    justifyContent: 'end',
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
          href={'https://goo.gl/forms/qXHxqwVzuXZt07Jq1'}
        >
          Become a member!
        </Button>
        <LongMenu/>
      </Toolbar>
    </Container>
    <div style={ {paddingTop: '5em' }}>
      {children}
    </div>
  </div>
)

Navigation.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigation)