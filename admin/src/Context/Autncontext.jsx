import React from 'react'
import { createContext } from "react";

export const Authdatacontext = createContext();



function Autncontext({children}) {


    // let serverurl = "http://localhost:8000";
let serverurl = "https://zoomstore-backend-jade.vercel.app";
    

  let value ={
    serverurl
  }
  
  
    return (
    <div>


        <Authdatacontext.Provider value={value}>
            {children}
        </Authdatacontext.Provider>









    </div>
  )
}

export default Autncontext