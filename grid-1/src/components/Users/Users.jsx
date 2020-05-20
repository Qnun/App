import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-avatar.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)
                            }}> Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)
                            }}> Follow </button>
                        } </div>
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