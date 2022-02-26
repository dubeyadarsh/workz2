import React from 'react'
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from 'react';
const Details = () => {
  const location = useLocation();
   const props = location.state;
   const [allusers,setAllUser]=useState([]);
   function fetchAll(e){
    e.preventDefault();
  Axios.get("/fetchAll").then((res)=>{
   console.log(res.data);
   console.log(props.projects)
   setAllUser(res.data);
  })
   }
   function sentRequest(friendid){
    console.log(friendid);

    Axios.post("/sentReq",{friendid:friendid, projectid:props.projectid}).then((response)=>{
        alert("sent");
    })
 }
  return (<>
    <div>Details</div>
    <h1>{props.projectid}</h1>
    <button onClick={fetchAll}>Add Mates</button>
    <div className="container">
      {allusers.map((val,key)=>{
        return <>
        <div className='row   w-50 my-2' style={{border:"2px solid green"}}>
          <div className="col-1">
          <i class="iconic fa fa-user mt-1 fa-2x"  aria-hidden="true"></i>

          </div>
          <div className="col-4">
         <h6>{val.name}</h6>
         <h6>{val.username}</h6>
         </div>
         <div className="col-1 mt-1 ml-5">
           <button key={key} className='btn btn-primary' onClick={()=>{sentRequest(val._id)}}>Send</button>

         </div>
         
         </div>
        </>
      })
    }
    </div>
    
    </>
  )
}
export default  Details;