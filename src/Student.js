import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { addUser } from './Slice';
import { sendQuestion } from "./Slice2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ModalChild from './ModalChild';
// import ModalChild3 from './ModalChild3';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Student = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const get = useSelector((state) => state.Sid2.answers);
  const get2 = useSelector((state) => state.Sid.userQuestion);
  console.log(get);

  const [data, setData] = useState(get);
  const [data2, setData2] = useState(get2);

  const [data3, setData3] = useState("");///displaying question//
  const [data4, setData4] = useState("");////displaying answer//
  const [data5,setData5]=useState([])

  function question() {
    // let obj={
    //     question:input
    // }
    // setData5([...data5,obj])
    localStorage.setItem("key1",input);

    console.log(input);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetch3 = localStorage.getItem("key1");
    setData3(fetch3);
    const fetch4 = localStorage.getItem("key2");
    setData4(fetch4);
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button style={{ color: "black" }} onClick={handleOpen}>
            Open modal
          </Button>
        </div>
        {/* <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                <div>Ask a Question</div>
              <input type='text' placeholder='Enter' onChange={(e)=>{
                setInput(e.target.value)
              }}/>
              <button style={{backgroundColor:"green"}} onClick={()=>{

                const obj2={
                    question:input
                }
                dispatch(sendQuestion(obj2))
              }}>Submit</button>
              <button onClick={()=>{
                navigate("/teacher")
              }}></button>
            </Typography> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div>Ask a Question</div>
              <input
                type="text"
                placeholder="Enter"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                style={{ backgroundColor: "green" }}
                onClick={question}
                // onClick={() => {
                //     const obj2 = {
                //         question: input
                //     };
                //     dispatch(sendQuestion(obj2));
                // }}
              >
                Submit
              </button>
              <button
                onClick={() => {
                  navigate("/teacher");
                }}
              >
                Navigate to Teacher
              </button>
              <div>
                Question.{data3}
                {/* {data2.map((item,index)=>{
        return(
             <div key={index}>{item.question}</div>
        )
    })} */}
              </div>
              <div>
                <h3>
                  ANSWER-{data4}
                  {/* {data.map((item,index)=>{

        return(
                <div key={index}>{item.answer}</div>
        )
    })} */}
                </h3>
              </div>
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
      {/* <ModalChild key1={input} key2={setInput} />
      <ModalChild3 input1={input} setInput2={setInput}/> */}
    </>
  );
};

export default Student;
