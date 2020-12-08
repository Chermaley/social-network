import React, {Component} from 'react';
import NavBar from '../nav/nav';
import {withRouter,Route} from "react-router-dom";
import './app.scss';
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import Dialogs from "../dialogs/dialogs";
import ProfileAPI from "../profile/profileAPI";
import UsersAPI from "../users/usersAPI";
import HeaderAPI from "../header/headerAPI";
import Login from "../login";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Spinner from "../common/spinner";
class App extends Component {
    static propTypes = {
        initializeApp: PropTypes.func,
        initialized: PropTypes.bool
    };
    componentDidMount() {
        const {initializeApp} = this.props;
        initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Spinner/>;
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
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};
export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App);
