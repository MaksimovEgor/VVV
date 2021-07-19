import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _myState: {
        ProfilePage: {
            postState: [
                {id: 1, message: "wewewew", likesCount: 123},
                {id: 2, message: "dcss", likesCount: 1233},
                {id: 3, message: "vfvfvfvfvfv", likesCount: 123222}
            ],
            newPostText: ""
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
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._myState.ProfilePage = profileReducer(this._myState.ProfilePage, action);
        this._myState.DialogsPage = dialogsReducer(this._myState.DialogsPage, action);
        this._callSubscriber(this._myState);
    }
}


window.store = store;