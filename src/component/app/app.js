import React, {Component, Suspense} from 'react';
import NavBar from '../nav/nav';
import {withRouter, Route, HashRouter} from "react-router-dom";
import './app.scss';
import Settings from "../settings";
import Dialogs from "../dialogs";
import ProfileAPI from "../profile/profileAPI";
import UsersAPI from "../users/usersAPI";
import HeaderAPI from "../header/headerAPI";
import Login from "../login";
import {connect, Provider} from "react-redux";
import PropTypes from "prop-types";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Spinner from "../common/spinner";
import store from "../../redux/reduxStore";

const News = React.lazy(() => import('../news'));
const Music = React.lazy(() => import('../music'));

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
                    <Suspense fallback={<Spinner />}>
                    <Route path='/profile/:id?' render={() => <ProfileAPI/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersAPI/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                    </Suspense>
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
let AppContainer = compose(withRouter,connect(mapStateToProps, {initializeApp}))(App);
const MainApp = () => {
    return (
        <HashRouter >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    );
};
export default MainApp;