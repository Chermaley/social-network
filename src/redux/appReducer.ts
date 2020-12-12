import {getAuth} from "./authReducer";

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
};
const appReducer = (state = initialState, action: ActionsType): InitialStateType=> {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

type ActionsType = InitializedSuccessActionType;

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = () :InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
export default appReducer;

export const initializeApp = () => async (dispatch : any) => {
    let dispatchResult = dispatch(getAuth());
    dispatchResult
        .then(() => {
            dispatch(initializedSuccess());
        });
};