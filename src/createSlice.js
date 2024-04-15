// import React from "react";
// import { createSlice } from '@reduxjs/toolkit'
// const InitialState={
//     cart:[]
// }

// const Slice=createSlice({

// name:"cart",
// InitialState,

// reducers:{

//   addToCart:(state,action)=>{
//     state.cart.push(action.payload)
//   },
 
// },


// })

// export const {addToCart} = Slice.actions
// export default Slice.reducer

// import { createSlice } from "@reduxjs/toolkit";
//  import React from "react";

// const initialState={
//     cart:[]
// }
// const Slice= createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{

//              state.cart.push(action.payload)
            
//         },
    
//     },

// })


// export const {addToCart}=Slice.actions
// export default Slice.reducer


import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}
const slice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

             state.cart.push(action.payload)
            
        },
 }})


export const {addToCart}=slice.actions
export default slice.reducer