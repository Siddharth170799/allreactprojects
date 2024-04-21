import { createSlice } from "@reduxjs/toolkit"


const initialState={
    answers:[]
}



const Slice3=createSlice({
    name:"users2",
    initialState,


    reducers:{
        sendAnswers:(state,action)=>{
            state.answers.push(action.payload)

        }
    }
})
export const{sendAnswers}=Slice3.actions
export default Slice3.reducer
