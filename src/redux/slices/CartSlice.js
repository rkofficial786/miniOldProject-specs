import { createSlice } from "@reduxjs/toolkit";


export const CartSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{state.push(action.payload)},
        remove:(state,action)=>{ return state.filter((item)=>item.id !== action.payload)},
        reset: () => [],
    }
});

export const {add,remove,reset}=CartSlice.actions;
export default CartSlice.reducer
