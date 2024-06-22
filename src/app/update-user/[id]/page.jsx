'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const UpdateUser = () => {

  const {id} = useParams();

  const fetchUserData = () => {
    axios.get('https://localhost:5000/user/getbyid/'+id)
    .then((result) => {
      console.log(result.data);
      
    }).catch((err) => {
      console.log(err);
      
    });
  }
  useEffect(() => {
    fetchUserData();
  }, [])

  
  return (
    <div>
      <h1>Update User</h1>
      <p>{id}</p>
    </div>
  )
}

export default UpdateUser;