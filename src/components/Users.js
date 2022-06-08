import React,{useEffect,useState} from 'react'
import { getUsers } from '../config/Myservice'


export default function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    })
  return (
    <div className='container'>
        <h1>List of users</h1>
        {users.map(user=>(
            <p key={user.id}>{user.username}</p>
        ))}
    </div>
  )
}
