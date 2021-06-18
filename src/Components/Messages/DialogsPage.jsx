import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import style from './Dialogs.module.css';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";


const DialogsPage = (props) => {
    let state = props.store.getState();
    let dialogsElements = state.dialogsPage.dialogsPersons.map(d => <DialogItem id={d.id} name={d.name}/>);
    let MessageElement = state.dialogsPage.dialogsMessages.map(m => <MessageItem message={m.message}/>);


    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={style.dialogsPage}>
            <div className={style.person}>
                <div> {dialogsElements} </div>
            </div>
            <div className={style.message}>
                <div> {MessageElement} </div>
                <textarea
                    value={state.dialogsPage.newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='enter'/>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>
    )
}

export default DialogsPage;
