import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './Slice'
import { useDispatch } from 'react-redux'

const Update = () => {
    const{id}=useParams()
    const users=useSelector((state)=>state.users)
    const existingUser=users.filter(f=>f.id==id)
    const {name,email}=existingUser[0]
    
    const[uname,setname]=useState(name)
    const [uemail,setEmail]=useState(email)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function submit(e){
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate("/")


    }
  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
      <form onSubmit={submit} >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" value={uname} placeholder='Enter name' onChange={(e)=>{
            setname(e.target.value)
          }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" value={uemail} name="email" className="form-control" placeholder='enter email' onChange={(e)=>{
            setEmail(e.target.value)
          }} />  
        </div>
        <br />
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Update
