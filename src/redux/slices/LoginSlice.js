import { createSlice } from "@reduxjs/toolkit";


export const LoginSlice = createSlice({
    name: "login",
    initialState: false ,
    reducers : {
        loginSuccess:(state,action) =>  { return state =true} ,
        loginFail:(state,action)=> { return state=false}
    }

})


export const {loginSuccess,loginFail}=LoginSlice.actions;
export default LoginSlice.reducer
