import React, {useState} from 'react';
import classes from './nav.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Spinner from "../common/spinner/spinner";
import {getProfileForSideBar} from "../../redux/sidebarReducer";
import {Link} from 'react-router-dom';
import ChatPage from "./chat/chatPage";

const NavBar = () => {
    const [content, toggleContent] = useState('info');

    if (content === 'chat') {
        return <div className={classes.chatContainer}>
            <ChatPage/>
        </div>;
    }
    else {
        return <InfoPage onChatButtonCLick={() => toggleContent('chat')}/>;
    }
};


type InfoPagePropsType = {
    onChatButtonCLick: () => void
}
const InfoPage: React.FC<InfoPagePropsType> = ({onChatButtonCLick}) => {
    const login = useSelector((state:AppStateType) => state.auth.email);
    const authProfile = useSelector((state: AppStateType) => state.sidebar.profileData);
    const dispatch = useDispatch();
    const getAuthUserData = () => {
        dispatch(getProfileForSideBar());
    };

    if(!authProfile) {
        getAuthUserData();
        return <Spinner/>;
    }

    return (
        <nav className={classes.navbar}>
            <div className={classes.user}>
                <div className={classes.photo}><img src={authProfile.photos.small} alt="avatar"/></div>
                <p className={classes.name}>{authProfile.fullName}</p>
                <span className={classes.email}>{login}</span>
                <div className={classes.button}>
                    <Link to={'/'}>Go to profile</Link>
                </div>
                <button onClick={onChatButtonCLick}>click to chat</button>
            </div>
            <div className={classes.interesting}>
                <span className={classes.title}>Chat</span>
                <div className={classes.content}/>
            </div>
        </nav>
    );
};

export default NavBar;