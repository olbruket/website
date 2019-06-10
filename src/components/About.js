import React from 'react';
import Grid from '@material-ui/core/Grid';

import bikes from '../bikes.jpg';

const Home = () => (
  <div className={'message'} style={{width: '100vw', height: '60vh'}}>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '60vh' }}
    >
      <Grid item xs={6}>
        <img src={bikes} alt="Bikes" />
      </Grid>
    </Grid>
  </div>
)

export default Home;
