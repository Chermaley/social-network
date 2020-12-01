const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
        messages: [
            {id: 1, message:'hey'},
            {id: 2, message:'lol'}
        ],
        dialogs: [
            {person: 'Andrey', id: 1},
            {person: 'Sergey', id: 2}
        ],
        newMessageText: ''
};


export const dialogsReducer = (state = initialState, action) => {
    let newMessage;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:

            return {
                ...state,
                newMessageText: action.text
            };
        case  ADD_MESSAGE:
            newMessage = {
                id: 5,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        default:
            return state;
    }
};
export default dialogsReducer;
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessage = (text) =>
    ({type: UPDATE_NEW_MESSAGE, text});