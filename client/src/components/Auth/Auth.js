import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);  // Props for show password
    const [isSignUp, setIsSignUp] = useState(false);          // Switch between sign In and sign Up

    const handleSubmit = () => {

    }

    const handleChange = () => {
       
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp );
        handleShowPassword(false);
    }
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)  // If clicked show else dont show password

    return (
        <div>
            <Container conponent = "main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        {/* <LockOutlinedIcon/> */}
                    </Avatar>
                    <Typography variant="h5">{isSignUp ? 'SignUp' : 'SignIn'}</Typography>
                    <form className={classes.form} onSubmit>{handleSubmit}
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>  
                                                     {/* import Input.js and half too! */}
                                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half /> 
                                        <Input name='lastName' label='Last Name' handleChange={handleChange} half />

                                    </>
                                )
                            }
                            <Input name="email" label="Email Adress" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                            { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}   {/*  If is Sign up show!! */}
                        </Grid> 
                        <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        {/* Switch between Sign Up and Sign In */}
                        <Grid container justufy='flex-end'>
                            <Grid item> 
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
