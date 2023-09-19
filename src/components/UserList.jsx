import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserList.module.scss'



const UserList = ({user}) => {
    return (
        <div>
            {
                user.map(( user )=>{
                    return (
                        <div className={styles.card} key={user.id}>
                            <div className={styles.cardBody}>
                                <Link className={styles.Link} to={`/users/${user.id}`}>{user.name}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UserList;