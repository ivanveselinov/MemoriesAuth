import React from 'react'; 
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';  //import redux 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));  // import reducer

ReactDom.render(
<Provider store = { store }>  {/* REDUX IS ADDED */}
    <App />
</Provider>,
document.getElementById('root'));