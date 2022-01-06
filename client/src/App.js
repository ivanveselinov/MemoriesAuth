import React from 'react';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';
//Mui & Images
import { Container } from '@material-ui/core';
// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

    return(
        
        <BrowserRouter>
            <Container maxwidth ="lg">
              <Navbar/>            {/* NavBar */}
                <Switch>   {/* Switch bettween 2 components */}
                    <Route>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                    </Route>
                </Switch>
        
            </Container>
        </BrowserRouter>  
     
    )
}

export default App;