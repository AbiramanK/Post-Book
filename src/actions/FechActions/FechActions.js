import {
    API_BASE
} from './../../configs/Configs';

import {
    handleResponse,
    handleCatch
} from '../../utilities/AuthActionUtilities/AuthActionUtilities';

export const storeList = async (body) => {
    return fetch(`${API_BASE}storelist`, {
        method: 'POST',
        body
    })
    .then((res) => {
        return handleResponse(res) ;
    })
    .catch((e) => {
        return handleCatch(e) ;
    })
}

export const productsList = async (body) => {
    return fetch(`${API_BASE}brands`, {
        method: 'POST',
        body
    })
    .then((res) => {
        console.log("products list", JSON.stringify(res))
        return handleResponse(res) ;
    })
    .catch((e) => {
        return handleCatch(e) ;
    })
}

export const storeCarts = (products) => {
    localStorage.setItem("CARTS", JSON.stringify(products)) ;
}

export const getCarts = () => {
    let carts = localStorage.getItem("CARTS") ;
    return JSON.parse(carts) ;
}