import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import TaskList from './TaskList';
const UserTask = () => {
//     const [params] = useSearchParams()
//    console.log(params.get("d"))

const [params] = useSearchParams();
   params.get("d")
   console.log( params.get("Id"))

   const [userDetails, setUserDetails]= useState([])
   const [tasks, setTasks]= useState([])
    

    const userTask= async function (){
        const data = await fetch ("https://reqres.in/api/users?page=2")
        const json = await data.json()
        console.log(json.data[params.get("Id")-7])
        setUserDetails(json.data[params.get("Id")-7])
    }

    const fetchTasks = async() => {
        // Use the Reqres.in API to fetch the user's tasks

          const data = await fetch ('https://reqres.in/api/tasks')
        const json = await data.json()
        console.log(json.data)
      };
    

    // 
    useEffect(()=>{
        userTask()
        fetchTasks()
    },[])
  return (
    <div>
<h1 className="text-xl font-bold mb-10">User Tasks</h1>

<div>

    <h1 className="text-4xl font-bold">Hello {userDetails.first_name}</h1>
    <h2 className="text-2xl mt-2 font-semibold">Below are your tasks</h2>
</div>

<div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">{task}</div>
        ))}
      </div>
      <TaskList/>
    </div>
  )
}

export default UserTask