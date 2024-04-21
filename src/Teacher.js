// import React, { useState } from 'react'

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const Student = () => {
//    const [input,setInput]=useState("")
//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Ask a Question
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       <input type='text' placeholder='Enter the Question Here' onChange={(e)=>{
//         setInput(e.target.value)
//       }} />
//     </Typography>
//   </Box>
// </Modal>
//     </div>
//   )
// }

// export default Student

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { addUser } from './Slice';

import { useDispatch, useSelector } from 'react-redux';
// import ModalChild from './ModalChild';
// import ModalChild3 from './ModalChild3';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Teacher = () => {
    debugger;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const dispatch=useDispatch()
  const details=useSelector((state)=>state.Sid.userQuestion[0])
  
  const [question,setQuestion]=useState(details)
  console.log(question)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <div>
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button style={{color:"black"}} onClick={handleOpen}>Open modal</Button></div>
        {/* <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <div>Question</div>
                {/* <div>{question.map((item,index)=>{
                    return(
                        <div key={index}>{item.text}</div>
                    )
                })}</div> */}
                <div>{question}</div>
                <div>Answer The Question</div>
              <input type='text' placeholder='Enter' onChange={(e)=>{
                setInput(e.target.value)
              }}/>
              <button style={{backgroundColor:"green"}} onClick={()=>{}}>Submit</button>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            </Typography>
          </Box>
        </Modal>
      </div>
      {/* <ModalChild key1={input} key2={setInput} />
      <ModalChild3 input1={input} setInput2={setInput}/> */}
    </>
  );
};

export default Teacher


