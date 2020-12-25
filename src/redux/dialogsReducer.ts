import {InferActionsTypes} from "./reduxStore";

type MessagesType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    person: string
}
const initialState = {
        messages: [
            {id: 2, message:'pteurvoluptatem accusantium doloremque laudantium.'},
        ] as Array<MessagesType>,
        dialogs: [
            {person: 'Andrey', id: 1},
            {person: 'Sergey', id: 2}
        ] as Array<DialogType>
};

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    let newMessage;
    switch (action.type) {
        case  'DIALOGS/ADD_MESSAGE':
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

export const actions = {
    addNewMessage : (message: string) => ({type: 'DIALOGS/ADD_MESSAGE', message} as const)
};
export default dialogsReducer;

// Type
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>