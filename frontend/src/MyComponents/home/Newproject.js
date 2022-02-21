import React from 'react'
import Axios from "axios";
import { useState, useEffect } from 'react';
const Newproject = () => {
    const [proname,setproname]=useState("");
    function createProject(e){
        e.preventDefault();
    
        Axios.post("/newproject",{projectid:proname}).then((response)=>{
            alert("done");
        })
     }
  return (
      <>
    <div>Newproject</div>
     <input type="text" name="" value={proname} onChange={(e)=>setproname(e.target.value)} />
     <button className='btn-danger' onClick={createProject}> submit</button>
     </>
  )
}
export default  Newproject;