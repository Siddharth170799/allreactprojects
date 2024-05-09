import React, { useState } from 'react'

const Todolist2 = () => {
    const [tasks,setTasks]=useState([{
        task:"wakeup"
    },{
        task:"brush teeth"
    },{
        task:"take bath"
    },{
        task:"have breakfast"
    }])
    function movetaskdown(index){
        if(index<tasks.length-1){
            let updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask)
        }
       
    }
    function moveTasksUp(index){
        if(index>0){
            let updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }
  return (
    <div>
      {tasks.map((item,index)=>{
        return(
           <> <div key={index}>{item.task}</div><button onClick={()=>movetaskdown(index)}>Click To MoveDown</button><button onClick={()=>moveTasksUp(index)}>Click To MoveUp</button></>
        )

      })}
    </div>
  )
}

export default Todolist2
