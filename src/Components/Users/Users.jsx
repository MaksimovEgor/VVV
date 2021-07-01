import style from "./users.module.css";
import ava from "../../common/Images/ava.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.users}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {' ' + p + ' '} </span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <div>

                        <NavLink to={'/profile/' + u.id}>
                            <span><img src={u.photos.small !=null ? u.photos.small : ava}/></span>
                        </NavLink>

                        <div>{u.name}</div>
                    </div>
                    <span>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </span>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;
