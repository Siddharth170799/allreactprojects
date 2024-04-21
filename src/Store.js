// import { create } from '@mui/material/styles/createTransitions'
// import React from 'react'
// import { configureStore } from '@reduxjs/toolkit'
// import Slice from './Slice'

// const Store =configureStore({
//     reducer:{
//         users: Slice
//     }
// })

// export default Store
import { configureStore } from '@reduxjs/toolkit'
// import Slice from './Slice'
import slice from './Slice';
import Slice2 from './Slice2';

const store = configureStore({
    reducer: {
        users: slice.reducer, // Ensure you're using the reducer from Slice
        Sid:Slice2
    }
});

export default store;

