import React from "react";
import {logout} from "../../redux/authReducer";
import {useDispatch} from "react-redux";
import withAuthRedirect from "../redirectHOC";

const Settings = () => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    return (
            <div>
                <span onClick={onLogout}>Logout</span>
            </div>
    );
};
export default withAuthRedirect(Settings);