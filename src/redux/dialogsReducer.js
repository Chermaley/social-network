
const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE';

const initialState = {
        messages: [
            {id: 1, message:'hey'},
            {id: 2, message:'lol'}
        ],
        dialogs: [
            {person: 'Andrey', id: 1},
            {person: 'Sergey', id: 2}
        ]
};


export const dialogsReducer = (state = initialState, action) => {
    let newMessage;

    switch (action.type) {
        case  ADD_MESSAGE:
            newMessage = {
                id: 5,
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};
export default dialogsReducer;
export const addNewMessage = (message) => ({type: ADD_MESSAGE, message});