import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import useStyles from './styles'
//mui
import { Grid, CircularProgress } from '@material-ui/core'

function Posts({ currentId, setCurrentId }) {
    const posts = useSelector((state) => state.posts); //from index reduxer posts
    // console.log(posts)

    const classes = useStyles();

    return (
 
          !posts.length ? <CircularProgress /> : (     // Spin added
              <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                  {
                      posts.map((post) => (             //Rendering all posts
                          <Grid key={post._id} item xs={12} sm={6}>
                             <Post post={post} setCurrentId={setCurrentId}/>           {/* Show posts */}
                         
                          </Grid>
                      ))
                  }
              </Grid>
          )
    
    )
}

export default Posts


