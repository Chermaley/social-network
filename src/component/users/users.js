import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import User from "./user";
import {findUser} from "../../redux/usersReducer";


const Users = ({usersData, findUser}) => {
    findUser();
    const users = usersData.map(({id, fullName, status}) => {
       return <User key={id} fullName={fullName} status={status}/>;
    });
    return (
        <div>
            {users}
        </div>
    );
};

Users.propTypes = {
    usersData: PropTypes.array,
    findUser: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        findUser: () => {
            dispatch(findUser());
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);