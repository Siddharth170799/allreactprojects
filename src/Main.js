import React, { useState } from "react";
import Country from "./Country";
import Capitals from "./Capitals";

const Main=()=>{

//     const [data,setData]=useState({
//         Ireland:"Dublin",
//         Iceland:"Reykjavik",
//         Poland :"Warsaw",
//         France:"Paris",
//         Netherlands:"Amsterdam"


//     },
// )

const hello={
    Ireland:"Dublin",
    Iceland:"Reykjavik",
    Poland :"Warsaw",
    France:"Paris",
    Netherlands:"Amsterdam"
}
    return(
        <>
        <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
          <Country country={Object.keys(hello)}/>
          <Capitals capitals={Object.values(hello)}/>
          </div>
          </>
    )
}
export default Main