import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import style from './Dialogs.module.css';


const DialogsPage = (props) => {



    let dialogsElements = props.dialogsPersons.map(d =>
        <div>
            <DialogItem id={d.id} name={d.name}/>
        </div>);



    let MessageElement = props.dialogsMessages.map( m =>
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
            </div>
        </div>

    )
}

export default DialogsPage;
