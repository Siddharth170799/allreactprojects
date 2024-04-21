import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from './Slice'

const SignUp = () => {
    const navigate=useNavigate()

  return (
    <>
    <div style={{textAlign:"center",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{margin:"30px"}} ><h2>Are You a Student?</h2>
    <div>
         <button style={{backgroundColor:"green"}} onClick={()=>{
             navigate("/signupstudent")
         }}>Click to Sign Up</button>
    </div>
    </div>
    <div ><h2>Are You a Teacher?</h2>
    <div>
         <button style={{backgroundColor:"green"}} onClick={()=>{
             navigate("/signupteacher")
         }}>Click to Sign Up</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignUp
