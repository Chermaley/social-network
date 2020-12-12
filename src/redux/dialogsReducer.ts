const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE';

type Messagetype = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    person: string
}
const initialState = {
        messages: [
            {id: 1, message:'hey'},
            {id: 2, message:'lol'}
        ] as Array<Messagetype>,
        dialogs: [
            {person: 'Andrey', id: 1},
            {person: 'Sergey', id: 2}
        ] as Array<DialogType>
};
export type InitialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddNewMessageActionType = {
    type: typeof ADD_MESSAGE,
    message: string
}
export const addNewMessage = (message: string): AddNewMessageActionType => ({type: ADD_MESSAGE, message});