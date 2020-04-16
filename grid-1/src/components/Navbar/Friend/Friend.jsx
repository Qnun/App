import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.proza.ru/pics/2019/03/26/916.jpg"/>
                <div>{props.friend}</div>
            </div>
        </div>
    );
}

export default Friend;