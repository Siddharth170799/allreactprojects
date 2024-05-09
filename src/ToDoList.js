import React, { useState } from "react";

const ToDoList = () => {
  // const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tasks,setTask]=useState([])

  function handleinputchange(event) {
    setNewTask(event.target.value);
  }
  function addtask() {
    if (newTask !== "") {
      setTask([...tasks, newTask]);
     setNewTask("");
     console.log(tasks)
    }
  }
  function deletetask(index) {
    let index2 = tasks.filter((_, i) => i!== index);
    setTask(index2);
  }
  function movetasku(index){
    if(index >0){
      let updatedTask=[...tasks];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
      setTask(updatedTask)
    }
   
  }
 // function movetaskup(index) {
  //   if (index > 0) {
  //     let updatedTask = [...tasks];
  //     [updatedTask[index], updatedTask[index - 1]] = [
  //       updatedTask[index - 1],
  //       updatedTask[index],
  //     ];

  //     setTask(updatedTask);
  //   }
  // }
  function movetaskdown(index) {
    if (index < tasks.length - 1) {
      let updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];

      setTask(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      {/* <h1 className="hello">To Do List</h1> */}
      <div style={{marginTop:"300px"}}>
        <input
        style={{background:"black",color:"white"}}
          type="text"
          placeholder="Enter a task to do"
          value={newTask}
          onChange={handleinputchange}
        />
        <button className="add-button" onClick={addtask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => {
          return (
            <>
              {" "}

           {tasks.length ==1 ? ( <>

            <li key={index}>
                <span className="text">{task}</span>
              </li>
              <button
                className="delete-button"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
             </>) : (<>
              <li key={index}>
                <span className="text">{task}</span>
              </li>
              <button
                className="delete-button"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => movetasku(index)}>
                MoveUp
              </button>
              <button
                className="move-button"
                onClick={() => movetaskdown(index)}
              >
                MoveDown
              </button>

              </>) }
            </>
          );
        })}
      </ol>
    </div>
  );
};

export default ToDoList;

