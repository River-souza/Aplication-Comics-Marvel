/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 25/04/2021.
    Change on : 01/05/2021.
    Author     : Michael Dydean
*/
import { ON_LOADING, ON_LOADED } from './types';

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_LOADING:
            return { ...state, loading: true };
        case ON_LOADED:
            return { ...state, loading: false };
        default:
            return state;
    }
};