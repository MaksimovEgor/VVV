import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import style from './Dialogs.module.css';


const DialogsPage = (props) => {

const onSendMessage = () => {

}



    let dialogsElements = props.DialogsPage.dialogsPersons.map(d =>
        <div>
            <DialogItem id={d.id} name={d.name}/>
        </div>);



    let MessageElement = props.DialogsPage.dialogsMessages.map( m =>
        <div><MessageItem message={m.message} /></div> )


    return (
        <div className={style.dialogsPage}>
            <div className={style.person}>
                <div>
                    {dialogsElements}
                </div>

            </div>
            <div className={style.message}>
                {MessageElement}
                <textarea />
                <button onClick={onSendMessage}>Send message</button>
            </div>




        </div>

    )
}

export default DialogsPage;
