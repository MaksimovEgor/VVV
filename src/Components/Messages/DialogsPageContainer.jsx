import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import MessageItem from './MessagesItem/MessageItem';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogsPersons.map(d => <DialogItem id={d.id} name={d.name}/>),
        MessageElement: state.dialogsPage.dialogsMessages.map(m => <MessageItem message={m.message}/>),
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (e) => {
            let body = e.target.value;
            dispatch(updateNewMessageBodyAC(body));
        }
    }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);
export default DialogsPageContainer;
