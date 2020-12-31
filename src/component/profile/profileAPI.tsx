import Profile from "./profile";
import React, {Component} from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {actions, getProfile, getStatus, savePhoto, saveProfileData, updateStatus} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";

type PathParamsType = {
    id: string
}
type MapDispatchType = {
    savePhoto: (photo: any) => void,
    getProfile: (id: number ) => void,
    getStatus: (id: number ) => void,
    saveProfileData: () => Promise<void>,
    updateStatus: () => void,
    onProfilePage: (bool: boolean) => void
}
type MapStateProps = ReturnType<typeof mapStateToProps>

type PropTypes = MapStateProps & MapDispatchType & RouteComponentProps<PathParamsType>
class ProfileAPI extends Component<PropTypes> {

    savePhoto = (photo: any) => {
        const {savePhoto} = this.props;
        savePhoto(photo);
    };

    refreshProfileData = () => {
        const {getProfile, match, getStatus, authUserId} = this.props;
        let id: number | null = +match.params.id;
        if (!id) {
            id = authUserId;
            if (!id) {
                this.props.history.push("/login");
            }
        }
        getProfile(id as number);
        getStatus(id as number);
    };

    componentDidMount() {
        const {onProfilePage} = this.props;
        onProfilePage(true);
        this.refreshProfileData();
    }

    componentDidUpdate(prevProps: PropTypes) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.refreshProfileData();
        }
    }

    componentWillUnmount(): void {
        onProfilePage(false);
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

const {onProfilePage} = actions;

export default compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {onProfilePage, getProfile, getStatus, updateStatus, savePhoto, saveProfileData}))(ProfileAPI);
