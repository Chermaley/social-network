import Profile from "./profile";
import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import PropTypes from 'prop-types';
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileAPI extends Component {

    static propTypes = {
        profile: PropTypes.any,
        setProfile: PropTypes.func,
        match: PropTypes.object
    };

    componentDidMount() {
        const {setProfile, match} = this.props;
        let id = match.params.id;
        if (!id) {
            id = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(res => {
                setProfile(res.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    };
};

export default withRouter(connect(mapStateToProps, {setProfile})(ProfileAPI));