import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '../global';


export const fetchProducts = createAsyncThunk(
    'users/fetchByIdStatus',
    async (thunkAPI) => {
        const url = URL + '/api/get/data';
        const headers = { 'Content-Type': 'application/json'}
        const data = await fetch(url, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({'model': 'product.template'}),
        }).then((res) => res.json());
        return data;
    }
)

export const productReducer = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {
        getData: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload.result;
        })
    },
});

export const cartReducer = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const isInCart = state.find(cart => cart.id === action.payload.id);
            if(isInCart){
                isInCart.qty = isInCart.qty + 1;
            } else {
                state.push({
                    id: action.payload.id,
                    product: action.payload,
                    qty: 1
                });
            }
        },
        remove: (state, action) => {
            let arrayIndex;
            for(let index=0; index < state.length; index++){
                if(state[index].id === action.payload){
                    arrayIndex = index;
                    break;
                }
            }
            if(arrayIndex > -1){
                state.splice(arrayIndex, 1);
            }
        },
    },
});

export const whishListReducer = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const isInWishList= state.find(wishlist => wishlist.id === action.payload.id);
            if(!isInWishList){
                state.push(action.payload);
            }
        },
        remove: (state, action) => {
            let arrayIndex;
            for(let index=0; index < state.length; index++){
                if(state[index].id === action.payload){
                    arrayIndex = index;
                    break;
                }
            }
            if(arrayIndex > -1){
                state.splice(arrayIndex, 1);
            }
        },
    },
});
