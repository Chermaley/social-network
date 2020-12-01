import React from "react";
import PropTypes from 'prop-types';

const User = ({fullName, status}) => {
    return (
        <div>
            <p>{fullName}</p>
            <p>{status}</p>
        </div>
    );
};
User.propTypes = {
    fullName: PropTypes.any,
    status: PropTypes.any

};
export default User;