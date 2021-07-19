import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Music from "./Components/Music/Music";
import DialogsPageContainer from "./Components/Messages/DialogsPageContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/ProfilePage/ProfileContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsPageContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
