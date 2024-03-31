import React from 'react'
import { Outlet } from 'react-router-dom';

function Root() {
const handleForm=e => {
    e.preventDefault();
    const form =e.target;
    const name = form.name.value;
    const email=form.email.value;
    const user = {name,email};
    console.log(user);

    fetch('https://simple-crud-server-virid.vercel.app/users',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then (data =>{
        console.log(data); 
        if(data.insertedId){
            alert("User Added Successfully")
            form.reset();
        }
    })
}

  return (
    <div>
        <h2>Simple CRUD Operation</h2>
        <form onSubmit={handleForm}>
            <input type="text" name="name" id="" /> <br />
            <input type="text" name="email" id="" /> <br />
            <input type="submit" value="Add User" />
            
        </form>
        <Outlet></Outlet>
    </div>
  )
}

export default Root