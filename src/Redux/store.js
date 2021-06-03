import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
    dialogsReducer,
    profileReducer

})

let store = createStore(reducers);


export default store;
