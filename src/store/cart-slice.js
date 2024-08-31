import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        items: [], 
        totalQuantity: 0 , 
        totalPrice: 0 ,
    },
    reducers:{
        addItemToCart(state , action) {
            const newItem = action.payload; 
            const existringItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++; 
            if(!existringItem){
                state.items.push({
                    id: newItem.id , price: newItem.price , quantity: 1   , totalPrice: newItem.price, name: newItem.title
                }); 
            }else {
                existringItem.quantity++; 
                existringItem.totalPrice =  existringItem.totalPrice + newItem.price; 
            }
        }, 
        removeItemFromCart(state, action) {
            const id = action.payload; 
            const existringItem = state.items.find(item => item.id === id)
            state.totalQuantity--; 
            if(existringItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existringItem.quantity--;
                // existringItem.totalPrice = existringItem.totalPrice - existringItem.price; 
            }
        }, 
    }
});


export const cartActions =cartSlice.actions;
export default cartSlice;


