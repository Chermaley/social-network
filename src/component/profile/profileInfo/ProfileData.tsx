import React from "react";
import classes from "./profileInfo.module.scss";
import ProfileStatusWithHooks from "../profileStatus/profileStatusWithHooks";
import {ContactsType, ProfileType} from "../../../types/types";

type ContactPropTypes = {
    contactTitle: string,
    contactValue: any
}

const Contact: React.FC<ContactPropTypes> = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>{contactTitle} : {contactValue}</div>
    );
};

type ProfileDataPropTypes = {
    profile: ProfileType,
    toggleEditMode: () => void,
    isOwner: any,
    updateStatus: (status: string) => void,
    status: string
}

export const ProfileData: React.FC<ProfileDataPropTypes> = ({profile, toggleEditMode, isOwner, updateStatus, status}) => {
    const {fullName, aboutMe, contacts} = profile;
    return (
        <div className={classes.profileData}>
            <div className={classes.name}>{fullName}</div>
            <div className={classes.status}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
            <div className={classes.aboutMe}>{aboutMe}</div>
            <div className={classes.social}>
                <span>Social Networks</span>
                {
                    Object.keys(contacts)
                        .map((title) => {
                            if (!contacts[title as keyof ContactsType]) return null;
                            return (
                                <Contact key={title} contactTitle={title}
                                         contactValue={contacts[title as keyof ContactsType]}/>
                            )
                                ;
                        })}
            </div>
            {isOwner ? <button className={classes.edit} onClick={toggleEditMode}>edit</button> : null}
        </div>
    );
};