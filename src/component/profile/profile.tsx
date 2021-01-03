import React, {useEffect} from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getUserId} from "../../redux/authSelectors";
import {getProfile, getStatus} from "../../redux/profileReducer";

export const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams<any>();
    const authUserId = useSelector(getUserId);

    const refreshProfileData = () => {
        let id: number | null = +params.id;
        if (!id) {
            id = authUserId;
            if (!id) {
                history.push("/login");
            }
        }
        dispatch(getProfile(id as number));
        dispatch(getStatus(id as number));
    };

    useEffect(() => {
        refreshProfileData();
    }, []);

    useEffect(() => {
        refreshProfileData();
    }, [params.id]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.profile}>
                <ProfileInfo id={params.id}/>
            </div>
        </div>
    );
};

