const FIND_USERS_BY_NAME = 'FIND_USERS_BY_NAME';

const initialState = {
    users: [
        {id: 1, fullName: 'Dmitry', status:'help me', location: {city: 'Novosibirsk', country:'Russia'}},
        {id: 2, fullName: 'Anton', status:'help me to', location: {city: 'Moscow', country:'Russia'}},
        {id: 3, fullName: 'Elisey', status:'help me', location: {city: 'Yekaterinburg', country:'Russia'}},
        {id: 4, fullName: 'Nick', status:'help me', location: {city: 'Minsk', country:'Belarus'}},
        {id: 5, fullName: 'Artem', status:'help me', location: {city: 'Novosibirsk', country:'Russia'}}
    ],
    term: '1'
};
const usersReducer = (state = initialState, action) => {
    let newUserList;
    switch (action.type) {
        case FIND_USERS_BY_NAME:
                newUserList = state.users.filter(state.users.indexOf(state.term) > 1);
                return {
                    ...state,
                    users: newUserList
                };
        default:
            return state;
    }
};
export const findUser = () => ({type: FIND_USERS_BY_NAME});
export default usersReducer;