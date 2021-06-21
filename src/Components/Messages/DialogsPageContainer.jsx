import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import StoreContext from "../StoreContext";


const DialogsPageContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let dialogsElements = state.dialogsPage.dialogsPersons.map(d => <DialogItem id={d.id} name={d.name}/>);
                let MessageElement = state.dialogsPage.dialogsMessages.map(m => <MessageItem message={m.message}/>);
                let newMessageBody = state.dialogsPage.newMessageBody;


                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC());
                }
                let onNewMessageChange = (e) => {
                    let body = e.target.value;
                    store.dispatch(updateNewMessageBodyAC(body));
                }


                return (
                    <DialogsPage dialogsElements={dialogsElements}
                                 MessageElement={MessageElement}
                                 onSendMessageClick={onSendMessageClick}
                                 onNewMessageChange={onNewMessageChange}
                                 newMessageBody={newMessageBody}/>
                )
            }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsPageContainer;
