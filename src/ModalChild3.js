import React from 'react'
////why this second child is not working/////
const ModalChild3 = ({input1,setInput2}) => {
 
  return (
    <div>
        <div><h1>Child 2</h1></div>
      <input type='text' value={input1} onChange={(e)=>{
        setInput2(e.target.value)

      }}/>
    </div>
  )
}

export default ModalChild3
