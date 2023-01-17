import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './auth/auth.reducer';
import { adminReducer } from './admin/admin.reducer';
import { cartReducer } from './cart/cart.reducer';
import { productReducer } from './products/products.reducer';


const rootReducer = combineReducers({
    admin:adminReducer,
    auth:authReducer,
    cart:cartReducer,
    product:productReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
