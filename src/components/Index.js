import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import index from './index.css';





class Index extends Component {
    render() {
        return (
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
                        <Typography component="h4" variant="display4" color={'white'}>
                            Hello there!
                        </Typography>
                    </Grid>   
                    <Grid item xs={6}>
                        <p>This page is under active development, please check back later!</p>
                    </Grid>

                </Grid> 
            </div>
        )
    }
}
export default Index;