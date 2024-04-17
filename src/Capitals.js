import React from "react";


const Capitals=({capitals})=>{



    return(
      <div>
        {capitals.map((item,index)=>{
            return(
                <div key={index}>{item}</div>
            )
        })}
        {/* <div>{capitals}</div> */}
      </div>
    )
}
export default Capitals