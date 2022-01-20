import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleLogin } from 'react-google-login';  // installed package!
import useStyles from './styles';
import Icon from './Icon'; // GOOGLE ICON IMPORTED
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};  //empty state!

const Auth = () => {
    
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);  // Props for show password
    const [isSignUp, setIsSignUp] = useState(false);          // Switch between sign In and sign Up
    const [formData, setFormData] = useState(initialState);   // Initial State for Login/SignUp 
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {   // Just for submit form
        e.preventDefault();
        
        if(isSignUp){ //sign up         
            dispatch(signup(formData, history)) 
        }else { //sign in
            dispatch(signup(formData, history)) 
        }
    }

    const handleChange = (e) => {    // For the Fields
                                    // Change by name  //get value
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp );
        setShowPassword(false);
    }

    // GOOGLE LOGIN! 
    const googleSuccess = async (res) =>{
        // console.log(res); if is working its going to console.log all details of user
        const result = res?.profileObj; // Cennot get property of profileObj of undefined
        const token = res?.tokenId;    
        // Reducer 
        try { 
            dispatch( {type: 'AUTH', data: { result, token } });

            history.push('/') //redirect to Home Page if login!
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) =>{
        console.log(error);
        console.log('Google SignIn was unsuccessfull. Try Again Later');
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

                            {/* Login / Sign Up Button */}
                        <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                              
                                {/* GOOGLE LOGIN Button !!! */}
                        <GoogleLogin 
                            clientId="111546531072-7c1clm4pvi6ln1ian1st5uc8qmvchb1k.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">         
                                  Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />
                                    {/* Switch between Sign Up and Sign In Button */}
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
