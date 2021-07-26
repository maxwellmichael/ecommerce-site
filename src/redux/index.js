import {combineReducers} from 'redux';
import productReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import userReducer from './reducers/user.reducer';


import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers(
    {
        products: productReducer, 
        cart: cartReducer,
        user: userReducer, 
        firestore: firestoreReducer,
    }
);


export default rootReducer;