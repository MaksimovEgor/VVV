import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';



let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}
                     dispatch={store.dispatch.bind(store)}
                />
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
