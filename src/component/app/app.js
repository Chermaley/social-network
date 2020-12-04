import React from 'react';
import NavBar from '../nav/nav';
import {Route} from "react-router-dom";
import './app.scss';
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import DialogsContainer from "../dialogs/dialogsWrapper";
import ProfileAPI from "../profile/profileAPI";
import UsersAPI from "../users/usersAPI";
import HeaderAPI from "../header/headerAPI";

const App = () =>{
    return (
            <div className='app'>
                <HeaderAPI/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:id?' render={() => <ProfileAPI/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersAPI/>}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );};


export default App;