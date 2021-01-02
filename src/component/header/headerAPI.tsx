
import React from 'react';
import Header from './header';
import {useDispatch, useSelector} from 'react-redux';
import {actions, FilterFormType, requestUsers} from "../../redux/usersReducer";
import {getPageSize} from "../../redux/userSelectors";
import {useHistory, useLocation} from 'react-router-dom';



const HeaderAPI: React.FC = (props) => {
    const dispatch = useDispatch();
    const pageSize = useSelector(getPageSize);
    const history = useHistory();
    const location = useLocation();



    const onFilterChanged = (filter: FilterFormType) => {
        if(location.pathname !== '/users' ) {
            history.push('/users');
        }

        dispatch(actions.setCurrentPage(1));
        dispatch(actions.setFilter(filter));

        dispatch(requestUsers(1, pageSize));
    };
    return (
        <Header {...props} onSearchSubmit={onFilterChanged}/>
    );
};

export default HeaderAPI;


