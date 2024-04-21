import { createSlice } from "@reduxjs/toolkit"


const initialState={
    userQuestion:[]
}


const Slice2=createSlice({

name:"questions",
initialState,

reducers:{
    sendQuestion:(state,action)=>{
        state.userQuestion.push(action.payload)
    }
   
}

})

export const{sendQuestion}=Slice2.actions
export default Slice2.reducer