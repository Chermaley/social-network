import React, {Component, ComponentType, Suspense} from 'react';
import NavBar from '../nav/nav';
import {Redirect, Switch, withRouter, Route, HashRouter} from "react-router-dom";
import './app.scss';
import Settings from "../settings";
import Dialogs from "../dialogs";
import ProfileAPI from "../profile/profileAPI";
import UsersAPI from "../users/usersAPI";
import HeaderAPI from "../header/headerAPI";
import Login from "../login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Spinner from "../common/spinner";
import store, {AppStateType} from "../../redux/reduxStore";




type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
    initializeApp: () => void
}
type PropTypes = MapStateToPropsType & MapDispatchToProps

const News = React.lazy(() => import('../news'));
const Music = React.lazy(() => import('../music'));

class App extends Component<PropTypes> {

    catchAllUnhandledErrors = () => {
        alert('some error occurred');
    };

    componentDidMount() {
        const {initializeApp} = this.props;
        initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) return <Spinner/>;
        return (
            <div className='app'>
                <HeaderAPI/>
                {this.props.isAuth ? <NavBar/> : null}
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:id?' render={() => <ProfileAPI />}/>
                            <Route path='/dialogs' render={() => <Dialogs/>}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/news' component={News}/>
                            <Route path='/users' component={UsersAPI}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' component={Login}/>
                            <Route path='*' render={() => <div>404 PAGE NOT FOUND :(</div>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    };
};
let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);
const MainApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    );
};
export default MainApp;