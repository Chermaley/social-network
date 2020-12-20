import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
import MyPosts from "./myPosts/myPosts";
import {ProfileType} from "../../types/types";

type PropTypes = {
    profile: ProfileType | null,
    status: string,
    updateStatus: () => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (formData: ProfileType) => Promise<any>
}

const Profile: React.FC<PropTypes> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} status={status} profile={profile} updateStatus={updateStatus}/>
            <MyPosts/>
        </div>
    );
};

export default Profile;