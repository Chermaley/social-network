import classes from "./profileInfo.module.scss";
import React, {ChangeEvent, useState} from "react";

import Spinner from "../../common/spinner";
import userPhoto from '../../../assets/img/avatar.png';
import ProfileStatusWithHooks from "../profileStatus/profileStatusWithHooks";
import ProfileDataForm from "./profileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";


type ProfileInfoPropTypes = {
    profile: ProfileType | null,
    status: string,
    updateStatus: () => void,
    isOwner: boolean,
    savePhoto: (photo: File) => void,
    saveProfile: (formData: ProfileType) => Promise<any>
}

const ProfileInfo:React.FC<ProfileInfoPropTypes> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, changeEditMode] = useState(false);

    const toggleEditMode = () => {
        if (!editMode) {
            changeEditMode(true);
        } else {
            changeEditMode(false);
        }
    };

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files?.length === 1) {
            const photo = e.target.files[0];
            savePhoto(photo);
        }
    };


    const onFormSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {toggleEditMode();}
        );
    };

    if (!profile) {
        return <Spinner/>;
    }

    const {photos} = profile;


    return (
        <>
            <div className={classes.description}>
                <div>
                    <img className={classes.profilePhoto} alt={'user photo'} src={photos.large || userPhoto}/>
                    {isOwner && <input onChange={onPhotoSelected} type="file"/>}
                    <b>status: </b><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onFormSubmit}/>
                    : <ProfileData isOwner={isOwner}
                                   profile={profile}
                                   toggleEditMode={toggleEditMode}/>}
            </div>
        </>
    );
};

type ContactPropTypes = {
    contactTitle: string,
    contactValue: any
}

const Contact: React.FC<ContactPropTypes> = ({contactTitle, contactValue}) => {
    return (
        <div>{contactTitle} : {contactValue}</div>
    );
};

type ProfileDataPropTypes = {
    profile: ProfileType,
    toggleEditMode: () => void,
    isOwner: any
}

const ProfileData: React.FC<ProfileDataPropTypes> = ({profile, toggleEditMode, isOwner}) => {
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = profile;
    return (
        <div className={classes.descr}>
            data
            {isOwner ? <button onClick={toggleEditMode}>edit</button> : null}
            <div>FullName: {fullName}</div>
            <div>About me: {aboutMe}</div>
            <div>{lookingForAJob ? "looking for a job" : "job?"}</div>
            <div>Skills: {lookingForAJob ? lookingForAJobDescription : null}</div>
            <div>Contacts: {
                Object.keys(contacts)
                    .map((title) => {
                return <Contact key={title} contactTitle={title} contactValue={contacts[title as keyof ContactsType]}/>;
            })}
            </div>
        </div>
    );
};

export default ProfileInfo;