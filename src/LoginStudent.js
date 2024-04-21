import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginStudent = () => {
    const [input,setInput]=useState("")
    const [input2,setInput2]=useState("")
    const navigate=useNavigate()

const details=useSelector((state)=>state.users)
console.log(details)

const get=details.find((item)=>item.email===input && item.password===input2)


function verify(e){
    e.preventDefault()
    if(get){
        navigate("/student")
    }
    else{
        alert("Invalid Email or Password")
    }
}

  return (
    <div>
      <div>
      <div class="container">
        <form class="signin-form">
          <h2>Sign In</h2>
          <div class="form-group">
            <label for="username">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={input}
              required
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input2}
              required
              onChange={(e) => {
                setInput2(e.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={verify}>
            Sign In
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LoginStudent
