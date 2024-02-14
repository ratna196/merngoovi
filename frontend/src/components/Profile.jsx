import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios';
import notecontext from './NoteContext';

import { useParams } from "react-router";

const Profile = () => {

  const { email } = useParams();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    course: '',
    officeName: 'HCL',

  });

  useEffect(() => {
    // Assume you have an API endpoint to fetch user data
    getProfileData()
      .then(res => {
        console.log(userData.companyName);
        console.log(res.data)
        res.data.officeName = "HCL";
        setUserData(res.data)
      
      })
  }, [])


  const API = "http://localhost:3001/login/"


  function getProfileData() {
    console.log(`${API}${email}`)
    return axios.get(`${API}${email}`);
  }



  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-blue p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>ProfilePage</h2>
                
        <marquee>
          <h1>Welcome  {userData.name} in {userData.officeName} </h1>
        </marquee>
        
          <div className="bg-black p-3 rounded" style={{ width: '80%', color: 'black',marginBottom:10}}>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">{userData.name}</p>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">{userData.email}</p>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Course</h5>
                <p className="card-text">{userData.course}</p>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Company Name</h5>
                <p className="card-text">{userData.officeName}</p>
              </div>
            </div>
          </div>
         </div>
          </div>
          </div>
          
  )  
}
export default Profile

    


  
