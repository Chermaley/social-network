import PropTypes from 'prop-types';
import React, {Component} from "react";
import {connect} from "react-redux";
import User from "./user";
import {changeTerm, follow, setCurrentPage, setTotalUsersCount, setUsers} from "../../redux/usersReducer";
import axios from 'axios';
import userPhoto from '../../assets/img/avatar.png';
import classes from './users.module.scss';
class Users extends Component{
    static propTypes = {
        usersData: PropTypes.array,
        changeTerm: PropTypes.func,
        term: PropTypes.any,
        onFollowClick: PropTypes.func,
        setUsers: PropTypes.func,
        totalUsersCount: PropTypes.number,
        pageSize: PropTypes.number,
        currentPage: PropTypes.number,
        setTotalUsersCount: PropTypes.func,
        setCurrentPage: PropTypes.func
    };



    componentDidMount() {
        const {setUsers, setTotalUsersCount, currentPage, pageSize} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                console.log(res);
                setTotalUsersCount(res.data.totalCount);
                setUsers(res.data.items);
            });
    }

    onChangeTerm = (e) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (i) => {
        const {setCurrentPage, setUsers} = this.props;
        setCurrentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(res => {
                setUsers(res.data.items);
            });
    };

    render () {

        const {usersData, onFollowClick, term, totalUsersCount, pageSize, currentPage} = this.props;
        const pagesCount = Math.ceil(totalUsersCount / pageSize);

        let pagesBtn = [];
        for (let i = 1; i <= pagesCount; i++ ){
            const className = currentPage === i ? classes.selectedPage : '';
            const btn = <span
                key={i}
                className={className}
                onClick={() => this.onPageChanged(i)}
            >{i}</span>;
            pagesBtn.push(btn);
        }

        const users = usersData.map(({id, name, status, followed, photos}) => {
            return <User
                onFollowClick={() => onFollowClick(id)}
                key={id}
                photoUrl={photos.small ? photos.small : userPhoto}
                followStatus={followed}
                fullName={name}
                location={'Russia'}
                status={status}/>;
        });
        return (
            <div>
                <div>
                    {pagesBtn}
                </div>
                <textarea onChange={this.onChangeTerm} value={term}/>
                {users}
            </div>
        );
    }
    // const filteredUsers = usersData
    //     .filter(({fullName}) => fullName.toLowerCase().indexOf(term.toLowerCase()) > -1);
}


const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.users,
        term: state.usersPage.term,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTerm: (term) => {
            dispatch(changeTerm(term));
        },
        onFollowClick: (id) => {
            dispatch(follow(id));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCount(usersCount));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);