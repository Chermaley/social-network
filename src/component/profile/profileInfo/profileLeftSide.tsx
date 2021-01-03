import classes from "./profileInfo.module.scss";
import userPhoto from "../../../assets/img/avatar.png";
import React, {ChangeEvent} from "react";
import {PhotosType} from "../../../types/types";


type ProfileLeftSideType = {
    isOwner: boolean,
    id: number,
    photos: PhotosType,
    onPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const ProfileLeftSide: React.FC<ProfileLeftSideType> = ({isOwner, photos, onPhotoSelected}) => {
    return <div className={classes.leftSide}>
        <div className={classes.profilePhoto}>
            <img alt={'user photo'} src={photos.large || userPhoto}/>
        </div>
        {isOwner && <input className={classes.upload} onChange={onPhotoSelected} type="file"/>}
    </div>;
};