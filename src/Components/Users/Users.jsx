import React from 'react';
import style from './users.module.css';
import * as axios from "axios";
import ava from '../../common/Images/ava.jpeg';


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div className={style.users}>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>
                        {' ' + p + ' '}</span>
                })}
            </div>


            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <span><img src={u.photos.small ? u.photos.small : ava}/></span>
                        <div>{u.name}</div>
                    </div>
                    <span>
                    {u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                </span>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>)
            }
        </div>
    };
}

export default Users;