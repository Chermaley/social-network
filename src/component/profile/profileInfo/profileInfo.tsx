import classes from "./profileInfo.module.scss";
import React, {ChangeEvent, useState} from "react";
import Spinner from "../../common/spinner";
import ProfileDataForm from "./profileDataForm";
import {ProfileType} from "../../../types/types";
import {ProfileLeftSide} from "./profileLeftSide";
import {ProfileData} from "./ProfileData";
import {savePhoto, saveProfileData, updateStatus} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfileSelector, getStatusSelector} from "../../../redux/profileSelectors";

type ProfileInfoPropTypes = {id: number}
const ProfileInfo: React.FC<ProfileInfoPropTypes> = ({id}) => {
    const isOwner = !id;
    const dispatch = useDispatch();
    const profile = useSelector(getProfileSelector);
    const status = useSelector(getStatusSelector);

    const [editMode, changeEditMode] = useState(false);

    const onUpdateStatus = (status: string) => {
        dispatch(updateStatus(status));
    };

    const onSaveProfileData = (formData: ProfileType): any => {
        return dispatch(saveProfileData(formData));
    };

    const toggleEditMode = () => {
        if (!editMode) {
            changeEditMode(true);
        } else {
            changeEditMode(false);
        }
    };


    const onFormSubmit = (formData: ProfileType) => {
        onSaveProfileData(formData).then(
            () => {
                toggleEditMode();
            }
        );
    };


    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files?.length === 1) {
            const photo = e.target.files[0];
            dispatch(savePhoto(photo));
        }
    };


    if (!profile) {
        return <Spinner/>;
    }

    const {photos} = profile;

    return (
        <>
            <div className={classes.info}>
                <ProfileLeftSide
                                 photos={photos}
                                 isOwner={isOwner}
                                 id={id}
                                 onPhotoSelected={onPhotoSelected}/>
                <div className={classes.rightSide}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile}
                                           profile={profile}
                                           onSubmit={onFormSubmit}/>
                        : <ProfileData isOwner={isOwner}
                                       updateStatus={onUpdateStatus}
                                       status={status}
                                       profile={profile}
                                       toggleEditMode={toggleEditMode}/>}
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;