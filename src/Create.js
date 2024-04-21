import React, { useState } from 'react'
import { addUser } from './Slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const users=useSelector((state)=>state.users)

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data ={id : users.length,name,email}
        dispatch(addUser(data))
        navigate("/")
    }
  return (
<>
  <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" placeholder='Enter name' value={name} onChange={(e)=>{
            setName(e.target.value)
          }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} className="form-control" placeholder='enter email' onChange={(e)=>{
            setEmail(e.target.value)
          }} />
        </div>
        <br />
        <button  type="submit" className="btn btn-info" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
</>

  )
}

export default Create
