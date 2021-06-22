import React from 'react';
import style from './users.module.css';



let Users = (props) => {
    return <div className={style.users}>
        {
        props.users.map( u => <div key={u.id} >
            <div>
                <span><img src={u.photoURL}/></span>
                <span>{u.fullName}</span>
            </div>
            <div><button>Follow</button></div>
            <div>
                <span>{u.location.country}</span>
                <span>{u.location.city}</span>
            </div>
        </div>)
    }
    </div>
};


export default Users;