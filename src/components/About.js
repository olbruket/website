import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import bikes from '../bikes.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{width: '100vw', height: '60vh'}}>
      <Grid
        spacing={3}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: '60vh' }}
      >
        <Grid item xs={3}>
          <Typography variant='h1'>
            Om oss
          </Typography>
        </Grid>
        <Grid xs={5}>
          <Typography variant='body1' align={'justify'}>
          AB Ölbruket har sedan starten 1976 som uppgift att främja goda ölseder och gott ölbruk på Chalmers samt att vidareutveckla pipelineförbindelsen mellan Pripps och Chalmers. Bolaget ägs till hälften av Chalmers Studentkår och till hälften av Carlsberg Sverige AB, vilket borgar för kompetens inom såväl ingenjörskonst som ölbryggning.

          Öl i pipeline kommer alltid fram - aldrig fast alltid flytande
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={bikes} alt="Bikes" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
