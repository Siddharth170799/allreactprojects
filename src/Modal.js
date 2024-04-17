// import React from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import ModalChild from './ModalChild';


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// const Model = () => {
//     const [open, setOpen] = React.useState(false);
//     const[input,setInput]=React.useState("")
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
  

//   return (
// <>
// <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
        
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           {input}
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//    <ModalChild key1={input} key2={setInput}/>
//    </>
//   )
// }

// export default Model

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalChild from './ModalChild';
import ModalChild3 from './ModalChild3';

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

const ParentComponent = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {input}
            </Typography>
          </Box>
        </Modal>
      </div>
      <ModalChild key1={input} key2={setInput} />
      <ModalChild3 input1={input} setInput2={setInput}/>
    </>
  );
};

export default ParentComponent;

