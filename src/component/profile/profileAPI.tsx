import Profile from "./profile";
import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../redirectHOC/redirectHOC";
import {compose} from "redux";
import {getProfile, getStatus, savePhoto, saveProfileData, updateStatus} from "../../redux/profileReducer";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type PropsTypes = {
    savePhoto: (photo: any) => void,
    getProfile: (id: number) => void,
    getStatus: (id: number) => void,
    saveProfileData: () => void,
    updateStatus: () => void,
    profile: ProfileType,
    match: any,
    authUserId: number,
    status: string,
    history: any
}

class ProfileAPI extends Component<PropsTypes> {

    savePhoto = (photo: any) => {
        const {savePhoto} = this.props;
        savePhoto(photo);
    };


    refreshProfileData = () => {
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
    };

    componentDidMount() {
        this.refreshProfileData();
    }

    componentDidUpdate(prevProps: PropsTypes) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.refreshProfileData();
        }
    }

    render() {
        const {profile, status, updateStatus, saveProfileData} = this.props;
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.id}
                     profile={profile}
                     status={status}
                     savePhoto={(photo) => this.savePhoto(photo)}
                     updateStatus={updateStatus}
                     saveProfile={saveProfileData}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
    };
};

export default compose(
    withAuthRedirect,
    withRouter, connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfileData}))(ProfileAPI);

