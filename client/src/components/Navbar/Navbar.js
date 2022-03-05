import React, { useState, useEffect } from 'react'
import decode from 'jwt-decode'; // for logout user if token expires!
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'  //link to css
// import memories from '../../images/memories.png'  // link to image
import memories1 from '../../images/memories1.png'
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));  // Fetch profile from redux
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    // Logout With Google
    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    // Login With Google User Refresh !!
    useEffect(() => {
        const token = user?.token;
        
        if(token){
            const decodedToken = decode(token);
            
            // if token expores just logout user!!
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();  
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <div>
              <AppBar className={ classes.appBar } position="static" color="inherit">
                  <div className={classes.brandContainer}>
                     <Typography className={ classes.heading } variant="h2" align="center">Share a Memory</Typography>
                     <img className={ classes.image } src={memories1} alt="memories" height="60" />
                  </div>
                  <Toolbar className={classes.toolbar}>
                      {user ? (
                         <div className={classes.profile}>                                                              {/* first letter of name */}
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> {/* Avatar*/}
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>  {/* userName*/}
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                          </div>
                      ) : (
                         <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                      )}
                  </Toolbar>
                </AppBar>
        </div>
    )
}

export default Navbar
