import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {debugger
                return <span className={props.currentPage === p && s.selectPage}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.user}>

                <div className={s.item}>
                    <div>
                        <NavLink to={'/profile/' + u.id} activeClassName={s.active}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    'API-KEY': '5e68dbfd-7f59-406c-8c65-71f92da248b4'
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}> Unfollow</button>

                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    'API-KEY': '5e68dbfd-7f59-406c-8c65-71f92da248b4'
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}> Follow </button>
                        }
                    </div>
                </div>
                <div className={s.block}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
        }</div>
};

export default Users