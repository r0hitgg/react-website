import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productReducer, cartReducer, whishListReducer } from "./reducer";
import thunk from 'redux-thunk';


const reducer = combineReducers({
    products: productReducer.reducer,
    cart: cartReducer.reducer,
    wishlist: whishListReducer.reducer,
});

export const productStore = createStore(reducer, applyMiddleware(thunk));
