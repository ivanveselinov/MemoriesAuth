import React, { useEffect, useState } from 'react'
import { Container, Grid, Grow } from '@material-ui/core'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from '../../styles'
import { getPosts } from '../../actions/posts'
import { useDispatch } from 'react-redux';  //redux dispatch

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    //When edit or Create post it will be update at once!
    useEffect (() => {
        dispatch(getPosts());
        
    }, [currentId, dispatch]);
    
    return (
        <div>
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
        </div>
    )
}

export default Home
