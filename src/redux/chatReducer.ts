import {FormAction} from "redux-form";
import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {ChatMessageType} from "../component/chat/chatPage";
import {chatApi} from "../api/chatApi";
import {Dispatch} from "redux";

const initialState = {
    messages: [] as ChatMessageType[],
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CHAT/MESSAGES_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            };
        default:
            return state;
        }
};

const actions = {
    messagesReceived : (messages: ChatMessageType[]) => ({
        type: "CHAT/MESSAGES_RECEIVED", payload: messages
    } as const)
};

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages));
        };
    }
    return _newMessageHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe(newMessageHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    const unsubscribe = chatApi.subscribe;
    unsubscribe(newMessageHandlerCreator(dispatch));
    chatApi.stop();
};

export const sendMessage = (message: string): ThunkType => async () => {
    chatApi.sendMessage(message);
};

export default chatReducer;
// Type
export type InitialStateType = typeof initialState
type ThunkType = CommonThunkType<ActionsType | FormAction>
type ActionsType = InferActionsTypes<typeof actions>;
