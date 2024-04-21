import React, { useState } from 'react'
import { addUser } from './Slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignUpStudent = () => {
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()

  return (
    <div>
         <div>
      <div class="signup-container">
    <h2>Sign Up</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" required onChange={(e)=>{
            setEmail(e.target.value)
}}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
      </div>
      <div class="form-group">
        <button type="submit" onClick={(e)=>{
            let obj={
                userName:userName,
                email:email,
                password:password
            }
            dispatch(addUser(obj))
            e.preventDefault()
            navigate("/signinstudent")
        }}>Sign Up</button>
      </div>
    </form>
    <p>Already have an account? <a href="#">Log In</a></p>
  </div>
    </div>
    </div>
  )
}

export default SignUpStudent
