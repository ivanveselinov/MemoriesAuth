import React, { useState, useEffect } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';  //redux dispatch
import { getPosts } from './actions/posts'
//Mui & Images
import useStyles from './styles'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    //When edit or Create post it will be update at once!
    useEffect (() => {
        dispatch(getPosts());
        
    }, [currentId, dispatch]);

    return(
        <div>
      
            <Container maxwidth ="lg">
                <AppBar className={ classes.appBar } position="static" color="inherit">
                     <Typography className={ classes.heading } variant="h2" align="center">Memories</Typography>
                     <img className={ classes.image } src={memories} alt="memories" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container  justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>  
                            </Grid> 
                        </Grid>
                    </Container>
                </Grow>
            </Container>
            
        </div>
    )
}

export default App;