import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export default function AddFriend(){
    
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""

    })

    const handleChanges = e => {        
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", newFriend)
            .then(res => {
                console.log(res);                                
            })
            .catch(err => {
                console.log(err.response);                
            })
            setNewFriend({
                name: '',
                age: '',
                email:''
            })
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
                id="name"
                type="text" 
                name="name"
                placeholder="name"
                value={newFriend.name}
                onChange={handleChanges}
            />

            <input                
                id="age"
                type="text"
                name="age"
                placeholder="age" 
                value={newFriend.age}
                onChange={handleChanges}
            />

            <input                
                id="email"
                type="email"
                name="email"
                placeholder="email" 
                value={newFriend.email}
                onChange={handleChanges}
            />

            <button type="submit">Submit</button>

        </form>
    )


}