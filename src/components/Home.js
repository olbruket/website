import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from '../logo.svg';

const Home = () => (
  <div className={'message'} style={{width: '100vw', height: '70vh'}}>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '70vh' }}
    >
      <Grid item xs={6}>
        <div>
          <img src={logo} />
          <Typography component="h4" variant="display4" color={'default'}>
                                Hello there!
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6}>
        <p>This page is under active development, please check back later!</p>
      </Grid>

    </Grid>
  </div>
)

export default Home;
