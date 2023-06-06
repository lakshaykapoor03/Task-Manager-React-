import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserContainer = () => {
    const [users, setUsers]= useState([])
    const fetchUserData = async function(){
      const data= await fetch("https://reqres.in/api/users?page=2")
      const json = await data.json()
      console.log(json.data)
      setUsers(json.data)
    }
  
    useEffect(()=>{
      fetchUserData()
    }, [])
   return(
    <div>
      <h1 className="text-4xl font-bold pt-10">Hello ReqRes users!</h1>
      <div className="flex justify-between items-center mx-8 p-2 h-screen cursor-pointer">
        {users.map((user)=><Link key={user.id} to={"/userTask?Id="+user.id}><div className="">
          <h3 className="font-bold text-2xl">{user.first_name}</h3>
          <h4 className="font-semibold text-l">{user.email}</h4>
          <img className="h-40" src={user.avatar} alt="" />
        </div>
        </Link>)}
  
      </div>
    </div>
   )
}

export default UserContainer


