import React from 'react';
import {Header1} from '../header1/header1.js';
import Newproject from './Newproject';
import Viewproject from './Viewproject';
import Axios from "axios";
import { useState, useEffect } from 'react';

import './Home.css'
 const Home = () => {
   const [user,setUser]=useState({});
   const [projects,setprojects]=useState([]);
  
   function sentRequest(e){
      e.preventDefault();
  
      Axios.post("/sentReq",{friendid:"107965740358604973757",userid:"6204a3e062b344be8b51bc31"}).then((response)=>{
          alert("sent");
      })
   }
   function showRequests(e){
      e.preventDefault();
      Axios.get("http://localhost:3001/profile").then((response)=>{
          // console.log(response.data.project);
          setprojects(response.data.project);
        setUser(response.data);
      });
   }
   function nextCompo1(e){
      e.preventDefault();
      document.getElementById("2").style.display="none";
      document.getElementById("1").style.display="flex";
   }
   function nextCompo2(e){
      e.preventDefault();
      document.getElementById("1").style.display="none";
      document.getElementById("2").style.display="flex";
   }
  return<>
  < Header1 />
     {/* <button onClick={createProject}>Create ptoject</button>
     <button onClick={sentRequest}>Sent Request</button> */}
     <div className="container">
     <div className="row mt-1" style={{minHeight:"85vh"}}>
    <div className="col-2 mx-2" style={{borderRight:"2px solid black"}}>
    
    <button className='btn btn-primary' onClick={nextCompo1}> Create Project </button>
    <button className='btn btn-success my-2' onClick={nextCompo2}> View Projects </button>
    
    </div>
    <div className="col-9 mx-4">
     <Newproject />
     <Viewproject />
     
   </div>
  </div>
  
  </div>
   </>
};
export default  Home;