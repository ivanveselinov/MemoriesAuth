import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPosts, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

// GET THE CURRENT ID

function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p)  => p._id === currentId) : null)  // update
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile')); // get user

    useEffect (() => {    // Update fetch info on screen
        if(post) setPostData(post);
    }, [post]);

    //CREATE UPDATE/ POST LOGIC
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId === 0) {
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name }));
        } else {
        dispatch(createPosts({ ...postData, name: user?.result?.name }));
        }
        clear();  // Call function clear to remove everything once is submited
    }

    // IF NO USER IS LOGGED IN -- HIDE ALL CREATE FORM
    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories
                </Typography>
            </Paper>
        )
    }
    const clear = () => {   // Remove Text when Submit or Edit
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }
        
    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                                {/* Edit OR Create A memory */}
                    <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Memory</Typography>  
                    

                    {/* title */}
                    <TextField 
                    name='title' 
                    variant='outlined' 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                    />  

                    {/* message */}
                    <TextField 
                    name='message' 
                    variant='outlined' 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                    />

                    {/* Tags */}
                    <TextField 
                    name='tags' 
                    variant='outlined' 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
                    />

                    {/* FileSelected */}
                    <div className={classes.fileInput}>
                    <FileBase 
                      type="file"
                      multiple={false}
                      onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>

                    {/* Submit button */}
                    <Button 
                    className={classes.buttonSubmit} 
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth 
                    >submit</Button>

                    {/* Clear Button */}
                    <Button 
                    className={classes.buttonSubmit} 
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={clear}
                    fullWidth 
                    >clear</Button>
                    
                </form>

            </Paper>
            
        </div>
    )
}

export default Form;
