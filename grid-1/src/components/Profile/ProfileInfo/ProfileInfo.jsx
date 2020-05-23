import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.background}>*/}
            {/*    <img src='https://million-wallpapers.ru/wallpapers/6/2/465959790129926/biryuzovyj-ozero.jpg'></img>*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <h3> {props.profile.fullName} </h3>
            </div>
            <ProfileStatus status='hello my friend' />
        </div>
    );
};

export default ProfileInfo;