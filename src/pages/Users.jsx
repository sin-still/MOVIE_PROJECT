import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Users.module.scss'

const Users = () => {
    const {id} = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ users, setUsers ] = useState(true);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then( res => {
            setUsers(res.data)
            setLoading(false)
        })
    },[])
    const userDetail = loading ? (<div className={styles.loading}>로딩중...</div>) : 
    (<div className={styles.user}>
        <img className={styles.img} style={{width:'300px'}} src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'></img>
        <div className={styles.box}>
            <div className={`${styles.userStyle} ${styles.userName}`}>{users.name}</div>
            <div className={`${styles.userStyle} ${styles.userEmail}`}>{users.email}</div>
            <div className={`${styles.userStyle} ${styles.userPhone}`}>{users.phone}</div>
            <div className={`${styles.userStyle} ${styles.userWebsite}`}>{users.website}</div>
        </div>
    </div>)
    
    
    return (
        <div>
            <h2 className={styles.h2}>User Info</h2>
            {userDetail}
            
        </div>
    );
};

export default Users;