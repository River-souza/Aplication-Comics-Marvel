/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 25/04/2021.
    Change on : 01/05/2021.
    Author     : Michael Dydean
*/
import { ON_MARVEL_HERO_SERIE_LOADED } from './types';

const INITIAL_STATE = {
  series: null,
  character: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case ON_MARVEL_HERO_SERIE_LOADED:
            return {
                ...state,
                series: action.payload.series,
                character: action.payload.character
            };
        default:
            return state;
    }
};