// import React, { useEffect, useState, useRef } from "react";

// const Increment = () => {
//   const [count, setCount] = useState(0);

//   const [reset1,setTimer1]=useState(true)
//   const [start1,setStart1]=useState(false)
//   const [pause,setPause]=useState(false)
//   console.log(count)

//   let interval = useRef(null);
//   console.log(interval.current)

//   useEffect(() => {
//     interval.current =
//     setInterval(function () {
//       setCount((count) => count + 1);
//     }, 1000);
//     console.log("hi")
//   }, []);
//   const reset = () => {
//     clearInterval(interval.current);

//     setCount(0);
//     setTimer1(!reset1)
//   };
//   const stop = () => {
//     clearInterval(interval.current)
//     setStart1(!start1)
//   };
//   const start = () => {

//     interval.current =
//     setInterval(function () {
//         setCount((count) => count + 1);
//       }, 1000);

//       setPause(!pause)

//   };
//   console.log(interval.current)
//   return (
//     <>
//       <div>{count}</div>

//     {reset1 && !start1 ? <><button onClick={reset}>Click To Reset</button><button onClick={stop}>Click To Pause</button> </>:<> <button onClick={start}>Click To Start</button><button onClick={reset}>Click To Reset</button></>}
// {/* {count !==0 && !start1  ?<><button onClick={reset}>Click To Reset</button><button onClick={stop}>Click To Pause</button></>: <><button onClick={start}>Click To Start</button></>} */}
//       {/* {pause ?  <> <button onClick={reset}>Click To Reset</button>
//       <button onClick={start}>Click To Start</button></>
//       : <><button onClick={reset}>Click To Reset</button>
//       <button onClick={stop}>Click To Pause</button> </> }
//    */}

//     </>
//   );
// };

// export default Increment;

import React, { useEffect, useState, useRef } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  const [start1, setStart] = useState(true);
  const [reset1, setReset] = useState(true);
  const [pause, setPause] = useState(true);
  let data = useRef(null);
  console.log(data)
  useEffect(() => {
    data.current = setInterval(function () {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
  }, []);
  // function toggle(){
  //   if(count===0){
  //     setStart(true)
  //   }
  //   else if(count!==0 || !reset1&& !pause){
  //     setReset(false)
  //     setPause(false)

  //   }

  // }

  function reset() {
    setCount(0);
    clearInterval(data.current);
  }
  function start() {
    data.current = setInterval(function () {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
    //  setReset(!reset1)
    //  setStart(!start1)
    //  setPause(pause)
  }
  function stop() {
    clearInterval(data.current);
    // setReset(!reset1);
    // setPause(pause);
    // setStart(false);
  }
  console.log(data.current);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <div>
            <h1>{count}</h1>
          </div>

          {/* {count !==0 ? <><button onClick={stop} style={{ backgroundColor: 'red' }}>
              Click To Stop
            </button><button onClick={reset} style={{ backgroundColor: 'grey' }}>
              Click to reset
            </button> </>:<button onClick={start} style={{ backgroundColor: 'green' }}>
            Click To Start
          </button>}
        */}

          {count === 0 || (!pause && start1) ? (
            <>
              {" "}
              <button onClick={start} style={{ backgroundColor: "green" }}>
                Click To Start
              </button>
            </>
          ) : (
            <>
              {" "}
              <button onClick={stop} style={{ backgroundColor: "red" }}>
                Click To Stop
              </button>
              <button onClick={reset} style={{ backgroundColor: "grey" }}>
                Click to reset
              </button>
            </>
          )}
        </center>
      </div>
    </>
  );
};

export default Increment;
