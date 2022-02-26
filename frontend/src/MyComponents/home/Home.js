import React from 'react';
import {Header1} from '../header1/header1.js';
import Newproject from './Newproject';
import Viewproject from './Viewproject';
import Axios from "axios";
import { useState, useEffect } from 'react';

import './Home.css'
 const Home = () => {
   const [user,setUser]=useState({});
   const [requests,setrequests]=useState([]);
   useEffect(()=>{
      Axios.get("http://localhost:3001/profile").then((response)=>{
          console.log(response.data.requests);
          setrequests(response.data.requests);
        setUser(response.data);
      });
       });
   function sentRequest(e){
      e.preventDefault();
  
      Axios.post("/sentReq",{friendid:"107965740358604973757",userid:"6204a3e062b344be8b51bc31"}).then((response)=>{
          alert("sent");
      })
   }
  
  
  return<>
  < Header1 />
     {/* <button onClick={createProject}>Create ptoject</button>
     <button onClick={sentRequest}>Sent Request</button> */}
     <div className="container">
     <div className="row mt-1" style={{minHeight:"85vh"}}>
    <div className="col-2 mx-2" style={{borderRight:"2px solid black"}}>
    
    <button className='btn btn-primary'> Create Project </button>
    <button className='btn btn-success my-2' > View Projects </button>
    
    </div>
    <div className="col-9 mx-4">
     <Newproject />
     <Viewproject />
      <div> 
         <h1>Requests</h1>
      {
        requests.map((val,key)=>{
          return<>
          <div className="row">
             <p>You got requests from</p>
          <h4> {val.projectid}  </h4>
          <button className='btn btn-danger h-25 mx-2'>Accept</button>
          </div>
          
          </> 
         })
      }
      </div>

   </div>
  </div>
  
  </div>
   </>
};
export default  Home;