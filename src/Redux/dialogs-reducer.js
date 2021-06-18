const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogsPersons: [
        {id: 1, name: "Masha"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Dimych"}
    ],
    dialogsMessages: [
        {id: 1, message: 'Hi!!!'},
        {id: 2, message: 'Wish you good luck'},
        {id: 3, message: "Don't stop!!!"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.dialogsMessages.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;