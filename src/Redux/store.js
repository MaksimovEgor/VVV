
let store = {
    _myState: {
        ProfilePage: {
            postState: [
                {id: 1, message: "wewewew", likesCount: 123},
                {id: 2, message: "dcss", likesCount: 1233},
                {id: 3, message: "vfvfvfvfvfv", likesCount: 123222}
            ],
            newPostText: 'Пост из state'
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
            ]
        }

    },
    getState() {
        return this._myState;
    },
    addPost() {
        let newPost =
            {   id: 4,
                message: this._myState.ProfilePage.newPostText,
                likesCount: 0};
        this._myState.ProfilePage.postState.push(newPost);
        this._myState.ProfilePage.newPostText = '';
        this._callSubscriber(this._myState);
    },
    updateNewPostText(text) {
        this._myState.ProfilePage.newPostText = text;
        this._callSubscriber(this._myState);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('OOP State Changed')
    }
}

export default store;

window.store = store;

/*

const reducers = combineReducers({
  /!*  dialogsReducer,
    profileReducer*!/

})


let store = createStore(reducers);
*/
