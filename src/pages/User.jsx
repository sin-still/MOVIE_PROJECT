import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';



const User = () => {
    const [user , setUser] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //console.log(response)
            setUser(response.data)
        })
    },[])
    return (
        <div className='userWrap'>
            <h1>USER</h1>
            <UserList user={user}/>

        </div>
    );
};

export default User;