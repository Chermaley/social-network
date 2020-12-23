import React from 'react';
import {useSelector} from 'react-redux';
import {Users} from './Users';
import {getIsLoadingStatus,} from "../../redux/userSelectors";
import Spinner from "../common/spinner/spinner";

type UsersPagePropsType = {

}
export const UsersPage: React.FC<UsersPagePropsType> = () => {
    const isLoading = useSelector(getIsLoadingStatus);

    return(
        <>
            {isLoading ? <Spinner/> : null}
            <Users/>
        </>
    );
};




