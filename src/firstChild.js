import React, { useState } from "react";
import  {useSelector, useDispatch} from 'react-redux'
const FirstChild=()=>{

const [data,setData]=useState('')
const dispatch=useDispatch()



    return(
        <>
        <div>
            <input type="text" placeholder="enter text" onChange={(e)=>{
                setData(e.target.value)
            }} />
            {/* <button onClick={()=>{
                dispatch({data})    
            }}>Click To Submit</button> */}
            <button onClick={()=>{
                
     dispatch({data})
            }}>Click to Submit</button>

        </div>
        <div>{data}</div>
        </>
    )
}
export default FirstChild