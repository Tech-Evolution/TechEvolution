import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETALLES_REQUEST,
    PRODUCT_DETALLES_SUCCESS,
    PRODUCT_DETALLES_FAIL,

    CLEAR_ERRORS
} from '../constantes/constProduct';

export const getProduct = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos')

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Detalles del producto

export const getDetalle = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETALLES_REQUEST})

        const {data} = await axios.get(`api/producto/:${id}`)

        dispatch({
            type:PRODUCT_DETALLES_SUCCESS,
            payload: data.productById
        })
    }catch (error){
        dispatch({
            type:PRODUCT_DETALLES_FAIL,
            payload: error.response.data.message
        })
    }
}


//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}