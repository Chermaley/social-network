import Profile from "./profile";
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../redirectHOC/redirectHOC";
import {compose} from "redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";

class ProfileAPI extends Component {

    static propTypes = {
        profile: PropTypes.any,
        getProfile: PropTypes.func,
        getStatus: PropTypes.func,
        match: PropTypes.object,
        status: PropTypes.any,
        updateStatus: PropTypes.func,
        authUserId: PropTypes.any,
        history: PropTypes.any
    };

    componentDidMount() {
        const {getProfile, match, getStatus, authUserId} = this.props;
        let id = match.params.id;
        if (!id) {
            id = authUserId;
            if (!id) {
                this.props.history.push("/login");
            }
        }
        getProfile(id);
        getStatus(id);
    }

    render() {
        const {profile, status, updateStatus} = this.props;
        return (
            <Profile {...this.props} profile={profile} status={status} updateStatus={updateStatus}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId
    };
};

export default compose(
    withAuthRedirect,
    withRouter, connect(mapStateToProps, {getProfile, getStatus, updateStatus}))(ProfileAPI);

