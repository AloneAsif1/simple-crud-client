import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Update() {
    const loadedUser = useLoaderData();
const handleUpdate = e =>{
    e.preventDefault();
    const form =e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name,email};
    console.log(user)
    fetch(`https://simple-crud-server-virid.vercel.app/update/${loadedUser._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
            alert("User Updated Successfully")
        }
    })
}
    
  return (
    <div><Link to='/users'>Button</Link>
        <h2>Update info of {loadedUser.name}</h2> 
        <form onSubmit={handleUpdate}>
<input type="text" name="name" id="" defaultValue={loadedUser.name}/> <br />
<input type="text" name="email" id="" defaultValue={loadedUser.email}/> <br />
<input type="submit" value="Update" />
        </form>
        </div>
  )
}

export default Update