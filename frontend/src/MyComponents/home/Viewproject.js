import React from 'react'
import Axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Viewproject = () => {
    const [user,setUser]=useState({});
    const [projects,setprojects]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:3001/profile").then((response)=>{
            // console.log(response.data.project);
            setprojects(response.data.project);
          setUser(response.data);
        });
         });
   
  return (
      <>
    <div>Viewproject</div>
    {
        projects.map((val,key)=>{
            return <Link to="/Details"  state={{projects:projects,projectid:val._id}} className='btn'>{val._id} </Link>
        })
    }
    </>
  )
}
export default  Viewproject;