import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navigation = ({ children }) => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography>
          Menues are cool
        </Typography>
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