import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import style from './Dialogs.module.css';


const DialogsPage = (props) => {

    let dialogsItemsData = [
        {id: 1, name: "Masha"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Dimych"}
    ];

    let dialogsElement = dialogsItemsData.map(d =>
        <div>
            <DialogItem id={d.id} name={d.name}/>
        </div>);



    let MessagesData = [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'Wish you good luck'},
        {id: 3, message: "Don't stop!!!"}
    ]

    let MessageElement = MessagesData.map(
        m => <div><MessageItem message={m.message} /></div> )


    return (
        <div className={style.dialogsPage}>
            <div className={style.person}>
                <div>
                    {dialogsElement}
                </div>
            </div>
            <div className={style.message}>
                {MessageElement}
            </div>
        </div>

    )
}

export default DialogsPage;
