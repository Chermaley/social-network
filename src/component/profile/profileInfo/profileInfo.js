import classes from "./profileInfo.module.scss";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import Spinner from "../../common/spinner";
import userPhoto from '../../../assets/img/avatar.png';
import ProfileStatusWithHooks from "../profileStatus/profileStatusWithHooks";
import ProfileDataForm from "../profileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, changeEditMode] = useState(false);

    const toggleEditMode = () => {
        if (!editMode) {
            changeEditMode(true);
        } else {
            changeEditMode(false);
        }
    };

    const onPhotoSelected = (e) => {
        e.preventDefault();
        if (e.target.files.length === 1) {
            const photo = e.target.files[0];
            savePhoto(photo);
        }
    };


    const onFormSubmit =  (formData) => {
        saveProfile(formData).then(
            () => {toggleEditMode();}
        );

    };

    if (!profile) {
        return <Spinner/>;
    }

    const {photos, contacts} = profile;

    const contactsList = Object.keys(contacts).map((title) => {
        return <Contact key={title} contactTitle={title} contactValue={contacts[title]}/>;
    });

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
                                       toggleEditMode={toggleEditMode}
                                       onSubmit={onFormSubmit}/>
                    : <ProfileData contactsList={contactsList}
                                   isOwner={isOwner}
                                   profile={profile}
                                   toggleEditMode={toggleEditMode}/>}
            </div>
        </>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>{contactTitle} : {contactValue}</div>
    );
};

const ProfileData = ({profile, toggleEditMode, contactsList, isOwner}) => {
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = profile;
    return (
        <div className={classes.descr}>
            data
            {isOwner ? <button onClick={toggleEditMode}>edit</button> : null}
            <div>FullName: {fullName}</div>
            <div>About me: {aboutMe}</div>
            <div>{lookingForAJob ? "looking for a job" : "job?"}</div>
            <div>Skills: {lookingForAJob ? lookingForAJobDescription : null}</div>
            <div>Contacts:</div>
            <div className={classes.contacts}>{contactsList}</div>
        </div>
    );
};


ProfileData.propTypes = {
    profile: PropTypes.object,
    toggleEditMode: PropTypes.func,
    saveProfile: PropTypes.func,
    contactsList: PropTypes.array,
    isOwner: PropTypes.bool
};

Contact.propTypes = {
    contactTitle: PropTypes.string,
    contactValue: PropTypes.string
};

ProfileInfo.propTypes = {
    profile: PropTypes.object,
    photos: PropTypes.object,
    status: PropTypes.any,
    updateStatus: PropTypes.func,
    isOwner: PropTypes.bool,
    savePhoto: PropTypes.func,
    saveProfile: PropTypes.any
};

export default ProfileInfo;