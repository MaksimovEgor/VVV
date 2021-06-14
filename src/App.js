import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";
import Users from "./Components/Users/Users";
import {Route} from "react-router";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import DialogsPage from "./Components/Messages/DialogsPage";
import Music from "./Components/Music/Music";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsPage
                        store={props.store}
                    />}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/profile' render={() => <ProfilePage
                        store={props.store}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
