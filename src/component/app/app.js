import React from 'react';
import NavBar from '../nav/nav';
import {Route} from "react-router-dom";
import './app.scss';
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import Dialogs from "../dialogs/dialogs";
import ProfileAPI from "../profile/profileAPI";
import UsersAPI from "../users/usersAPI";
import HeaderAPI from "../header/headerAPI";
import Login from "../login";

const App = () =>{
    return (
            <div className='app'>
                <HeaderAPI/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:id?' render={() => <ProfileAPI/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersAPI/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
    );};


export default App;