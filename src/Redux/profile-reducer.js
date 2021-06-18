const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postState: [
        {id: 1, message: "wewewew", likesCount: 123},
        {id: 2, message: "dcss", likesCount: 1233},
        {id: 3, message: "vfvfvfvfvfv", likesCount: 123222}
    ],
        newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            state.postState.push({id: 4, message: state.newPostText, likesCount: 1});
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;