/* eslint-disable react/prop-types */
import React from 'react';
import Profile from '../profile';
import Header from '../header';
import NavBar from '../nav/nav';
import {Route} from "react-router-dom";
import './app.scss';
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import DialogsContainer from "../dialogs/dialogsWrapper";
import Users from "../users";

const App = () =>{
    return (
            <div className='app'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );};


export default App;