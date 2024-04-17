import React from "react";


const Country=({country})=>{


    return(
        <div>
      {country.map((item,index)=>{
        return(<div key={index}>{item}</div>)
        
      })}
   {/* {country} */}
      </div>

    )
}
export default Country