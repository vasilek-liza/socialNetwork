import React from 'react';
import s from './Dialogs.module.scss';

const Messages = (props) => {
    return (<div>
            <div className={s.messages}>
                <p>{props.message}</p>
            </div>
    </div>
    )
}
export default Messages;
