import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerProduct, reducerDetalle } from './reducer/reducerProduct';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';

const reducer = combineReducers({
    products: reducerProduct,
    productDetalle: reducerDetalle,
    auth: authReducer, 
    user: userReducer,
    forgotPassword: forgotPasswordReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;