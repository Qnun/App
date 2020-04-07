import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://million-wallpapers.ru/wallpapers/6/2/465959790129926/biryuzovyj-ozero.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                <img src='http://s1.1zoom.net/big0/545/Rodents_Hamsters_535181_1280x852.jpg'></img>
            </div>
        </div>
    );
}

export default ProfileInfo;