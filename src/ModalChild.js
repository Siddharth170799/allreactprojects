import React, { useState } from 'react'

const ModalChild = ({key1,key2}) => {
    // const {input,setInput}=useState("")/// why no this////
 
 return (
    <div>
        <div><h1>Child 1</h1></div>
        {/* {key1} */}
      <input type='text' placeholder='type something' value={key1} onChange={(e)=>{
        key2(e.target.value)
      }}/>
    </div>
  )
}

export default ModalChild


// import React from 'react';

// const ModalChild = ({ input, setInput }) => {

//  return (
//     <div>
//       {input}
//       <input
//         type="text"
//         value={input}
//         onChange={(e)=>{
//             setInput(e.target.value)

//         }}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// };

// export default ModalChild;
