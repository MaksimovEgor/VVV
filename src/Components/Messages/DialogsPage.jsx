import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import style from './Dialogs.module.css';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/store";


const DialogsPage = (props) => {

    let state = props.store.getState().DialogsPage;
    let dialogsElements = state.dialogsPersons.map(d => <DialogItem id={d.id} name={d.name}/>);
    let MessageElement = state.dialogsMessages.map(m => <MessageItem message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={style.dialogsPage}>
            <div className={style.person}>
                <div> {dialogsElements} </div>
            </div>
            <div className={style.message}>
                <div> {MessageElement} </div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='enter'/>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>
    )
}

export default DialogsPage;
