import { createSlice } from "@reduxjs/toolkit";

const userList = [
    {
        name: "Siddharth",
        email: "siddharthboorgu@gmail.com",
        id:0
    },
    {
        name: "Abhay",
        email:"abhay@gmail.com",
        id:1
    },
    {
        name: "Sumanth",
        email: "sumanth@gmail.com",
        id:2
    }
];

const slice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser:(state,action)=>{
            console.log(action)
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
              const {id,name,email}=action.payload
              const uu =state.find(user=> user.id==id)
             if(uu){
                uu.name=name;
                uu.email=email;

             }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const uu=state.find(user=> user.id==id);
            if(uu){
                return state.filter(f=> f.id !==id)
            }
        }
    }
});
export const {addUser,updateUser,deleteUser}=slice.actions
export default slice; // Export the result of createSlice

