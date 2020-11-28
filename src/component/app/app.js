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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );};


export default App;