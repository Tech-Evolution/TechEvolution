import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETALLES_REQUEST,
    PRODUCT_DETALLES_SUCCESS,
    PRODUCT_DETALLES_FAIL,

    CLEAR_ERRORS
} from "../constantes/constProduct";

export const reducerProduct = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                productos: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }


        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;

    }
}

//Reductoor for detalle

export const reducerDetalle = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETALLES_REQUEST:
            return {
                ...state,
                loading: true

            }

        case PRODUCT_DETALLES_SUCCESS:
            return {
                loading: false,
                product: action.payload
                
            }


        case PRODUCT_DETALLES_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;

    }
}
