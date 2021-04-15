import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom';


const MessagesItem = (props) => {

    return (
    <div className={s.messagesItem}>
        <span>
            <div className={s.messagePeople}>
                <NavLink to='/1' className={s.messagePeople}>
                    {props.name}
                </NavLink>
                <hr></hr>
            </div>
        </span>
    </div>
       
    )
};

export default MessagesItem;