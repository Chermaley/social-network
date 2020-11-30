/* eslint-disable react/prop-types */
import React from 'react';
import Profile from '../profile';
import Header from '../header';
import NavBar from '../nav/nav';
import Dialogs from "../dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import './app.scss';
import Music from "../music";
import News from "../news";
import Settings from "../settings";

// eslint-disable-next-line react/prop-types
const App = ({state, dispatch, store}) =>{
    const {messagesPage, sidebar} = state;
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <NavBar state={sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile store={store}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dispatch={dispatch} state={messagesPage}/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );};


export default App;