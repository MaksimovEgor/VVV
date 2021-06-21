import React from 'react';
import style from './Dialogs.module.css';



const DialogsPage = (props) => {
    return (
        <div className={style.dialogsPage}>
            <div className={style.person}>
                <div> {props.dialogsElements} </div>
            </div>
            <div className={style.message}>
                <div> {props.MessageElement} </div>
                <textarea
                    value={props.newMessageBody}
                    onChange={props.onNewMessageChange}
                    placeholder='enter'/>
                <button onClick={props.onSendMessageClick}>Send message</button>
            </div>
        </div>
    )
}

export default DialogsPage;
