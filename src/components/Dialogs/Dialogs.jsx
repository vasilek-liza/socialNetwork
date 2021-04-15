import React from 'react';
import s from './Dialogs.module.scss';
import MessagesItem from './MessagesItem';
import Messages from './Messages';
import {BrowserRouter, Route} from 'react-router-dom';



const Dialogs = (props) => {

    let dialogItem = props.state.messageOfPeople.map (p=> (<MessagesItem id={p.id} name={p.name} />));
    let dialog = props.state.dialogMessages.map (p=> (<Messages  message={p.message} />));

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                
                <div><p className={s.dialog}>Мои диалоги</p> {dialogItem}</div>
                <div className={s.line}/>
                <Route path='/1' render= { ()=> <div> {dialog} </div>} /> 
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;