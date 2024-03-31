import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Users() {
    const LoadedUsers = useLoaderData();
const [users,setUsers] = useState(LoadedUsers);
    console.log(users);
    const handleDelete =(id)=>{
        console.log("delete",id)
        fetch(`https://simple-crud-server-virid.vercel.app/users/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert("User Deleted Successfully");
                const remaining =users.filter(user => user._id!==id)
                setUsers(remaining);
            }
        })
    }
  return (
    <div>
        <h2>Total Users : {users.length}</h2> 
{
    users.map(user => <p key={user._id}>
        {user.name} : {user.email} <Link  to={`/update/${user._id}`}><button>Update</button></Link> <button 
        onClick={()=>handleDelete(user._id)}>X</button>
    </p>)
}
    </div>
  )
}

export default Users;