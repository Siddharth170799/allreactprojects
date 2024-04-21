import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userList from "./userList";
import { Link } from 'react-router-dom';
import { deleteUser } from './Slice';
import { addUser } from './Slice';


const Home = () => {
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    console.log(users)
    function delete2(id){
    dispatch(deleteUser({id:id}))
}
  
  return (
    <div className='container'>
        <h2 style={{margin:"100px",textAlign:"center"}}>Crud App with JSON Server</h2>
      <Link to="/create"><div style={{textAlign:"center",marginBottom:"70px"}}> <button className='btn btn-success my-3' style={{backgroundColor:"green"}} >Create +</button></div></Link> 
        <table style={{marginBottom:"200px"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>EMAIL</th>
                    <th>ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 {users?.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={()=>{
                                    delete2(user.id)
                                }} className='btn btn-sm btn-danger ms-2' style={{backgroundColor:"red",marginLeft:"20px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                 })}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
