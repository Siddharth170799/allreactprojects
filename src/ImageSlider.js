import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'


const ImageSlider = ({url,limit = 5,page = 1}) => {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false);


    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data= await response.json();

            if(data){
                setImages(data)
                setLoading(false)
            }
        }
        catch(err){
            console.log(err,"error occurred")
            setLoading(false);
           
        }

    }
    useEffect(()=>{
        if(url!==""){
            fetchImages(url);
        }
    },[url])
    console.log(images)
    if(loading){
        return(
            <div>Loading Data ! please wait</div>
        )
    }
    if(errorMsg!==null){
        return(
            <div>Error occurred {errorMsg}</div>
        )
    }
  return (
    <div className='container'>
        <button className='arrow-left'>Left</button>
        {images && images.length ? images.map((item)=>{
            return(
                <img key={item.id}
                 alt={item.download_url}
                 src={item.download_url}
                className='current-image'/>
            )
        }

        ):null}
        <button className='arrow-right'>Right</button>
            {images && images.length ? images.map((_,index)=>{
                return(
                    <button key={index}></button>
                )

            }):null}      
    </div>
  )
}

export default ImageSlider
