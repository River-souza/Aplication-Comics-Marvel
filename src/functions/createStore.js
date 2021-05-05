/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 01/05/2021.
    Change on : 02/05/2021.
    Author     : Michael Dydean
*/
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));