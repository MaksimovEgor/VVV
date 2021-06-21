import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';
import StoreContext from "./Components/StoreContext";


let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root'))
}

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});


reportWebVitals();
