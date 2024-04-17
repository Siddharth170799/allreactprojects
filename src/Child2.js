import React, { useState } from 'react'
import Child3 from './Child3'

const Child2 = ({key1,key2}) => {
    const [newInput,setInput]=useState('')
  return (
    <>
    <h1>Child Component 1</h1>
    {/* <div>
      {key1}
      </div>
    <div>{key2}</div> */}
    <input type='text' value={newInput} onChange={(e)=>setInput(e.target.value)}/> <span>Hello</span>
   <Child3 key6={newInput}/>
    </>
  )
}

export default Child2
