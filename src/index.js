import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store";
import {BrowserRouter} from "react-router-dom";


let rerender = (myState) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                     myState={myState}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     ProfilePage={store.getState.ProfilePage}
                     DialogsPage={store.getState.DialogsPage}

                      dialogsPersons={myState.DialogsPage.dialogsPersons}
                      dialogsMessages={myState.DialogsPage.dialogsMessages}/>
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root'))
}

rerender(store.getState());
store.subscribe(rerender);


reportWebVitals();
