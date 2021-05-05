/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 25/04/2021.
    Change on : 03/05/2021.
    Author     : Michael Dydean
*/
import { combineReducers } from 'redux';
import globalReducer from '../globalRedux/reducer';
import homeReducer from '../pages/home/reducer';
import charReducer from '../pages/charDetails/reducer';

export default combineReducers({
  global: globalReducer,
  home: homeReducer,
  charDetails: charReducer
});
