const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
    _myState: {
        ProfilePage: {
            postState: [
                {id: 1, message: "wewewew", likesCount: 123},
                {id: 2, message: "dcss", likesCount: 1233},
                {id: 3, message: "vfvfvfvfvfv", likesCount: 123222}
            ],
            newPostText: 'Post from state'
        },
        DialogsPage: {
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
    },
    getState() {
        return this._myState;
    },
    _callSubscriber() {console.log('OOP State Changed')},
    subscribe(observer) {this._callSubscriber = observer},

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost =
                {   id: 4,
                    message: this._myState.ProfilePage.newPostText,
                    likesCount: 0};
            this._myState.ProfilePage.postState.push(newPost);
            this._myState.ProfilePage.newPostText = '';
            this._callSubscriber(this._myState);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._myState.ProfilePage.newPostText = action.text;
            this._callSubscriber(this._myState);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._myState.DialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._myState)
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._myState.DialogsPage.newMessageBody;
            this._myState.DialogsPage.newMessageBody = '';
            this._myState.DialogsPage.dialogsMessages.push({id: 4, message: body})
            this._callSubscriber(this._myState);
        }
        }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText});
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;

window.store = store;

/*

const reducers = combineReducers({
  /!*  dialogsReducer,
    profileReducer*!/

})


let store = createStore(reducers);
*/
