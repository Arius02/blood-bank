import React from 'react'
import { campaingsList } from '../utils/constansts'

import { useEffect } from 'react';

const Camp = () => {
  
   function lineLength(){
     
     let line = document.querySelectorAll(".step-line")
     for (let i = 0; i < line.length; i++) {
       line[i].firstElementChild.firstElementChild.style.height = `${line[i].clientHeight}px`
      }
    }      
useEffect(()=>{
        window.addEventListener("resize", lineLength)
        lineLength()

        return ()=> window.removeEventListener("resize", lineLength)
  },[])
    
  

  return campaingsList.map((camp, index) => <div className='flex mb-4 step-line'  key={index}>
    <div className={`${camp.visted === true? "bg-primary" : "border-2 bg-white "}
     w-5 h-5 rounded-full relative shrink-0 z-20 mt-2`}>
      
       <div className={`${!camp.visted && "  bg-opacity-30 "}
       absolute -translate-x-1/2 top-full  left-1/2 w-1 ${camp.last && "hidden"} bg-primary`}></div>
    </div>
    <h5 className={`${!camp.visted && " opacity-60 "} inline-block text-lg mr-5 content-start `}>{camp.place}
    </h5>

    
  </div>)
    
}

export default Camp