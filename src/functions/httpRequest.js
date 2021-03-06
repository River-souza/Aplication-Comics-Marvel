/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 23/04/2021.
    Change on : 03/05/2021.
    Author     : Michael Dydean
*/
import axios from 'axios';
import store from './createStore';
import { ON_LOADING, ON_LOADED } from '../globalRedux/types';

class HttpRequest {
    static instance() {
        const instance = axios.create({
            baseURL: 'https://gateway.marvel.com',
            params: {//licença de utilização de consumo da API Marvel
                "apikey": "7e9fee8c0203322e32138d4f01b77b36",
                "limit": "100"
            },
            timeout: 10000,
            method: 'get',
            responseType: 'json'
        });
        return instance;

    }
    async Get(urlApi, param = {}) {
        try {
            const get = HttpRequest.instance().get(urlApi, param);
            store.dispatch({ type: ON_LOADING });
            const result = await get;
            store.dispatch({ type: ON_LOADED });
            return result;
        } catch (error) {
            store.dispatch({ type: ON_LOADED });
            this.dealWithError(error);
        }
    }
}

var request = new HttpRequest();
export const HttpGet = async (urlApi, param = {}) => {
    return await request.Get(urlApi, param);
};
