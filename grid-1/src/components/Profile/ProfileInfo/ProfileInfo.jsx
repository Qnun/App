import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background} >
                <img src='https://million-wallpapers.ru/wallpapers/6/2/465959790129926/biryuzovyj-ozero.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                FOTO ^-^
            </div>
        </div>
    );
}

export default ProfileInfo;