import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import logo from './logo.svg';

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
        <div>
          {/* <img src={logo} alt="Logo" /> */}
          <Typography component="h4" variant="h2">
            Fervorem Credimus
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6}>
        <p>Öl i pipeline kommer alltid fram - aldrig fast alltid flytande</p>
      </Grid>

    </Grid>
  </div>
)

export default Home;
