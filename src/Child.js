import React from 'react'
import Child2 from './Child2'
import Child3 from './Child3'

const Child = () => {
  
const [input,setInput]=React.useState("")
    const name="siddharth"

  return (
    <>
    <div>Parent Component</div>
    <div>
        <input type='text' placeholder='enter text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <Child2  key1={name} key2={input}/>
      <Child3 key3={name} key4={input}/>
    </div>
    </>
  )
}

export default Child
