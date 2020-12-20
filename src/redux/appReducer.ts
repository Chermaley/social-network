import {getAuth} from "./authReducer";
import {InferActionsTypes} from "./reduxStore";

export type InitialStateType = typeof initialState

const initialState = {
    initialized: false
};
type ActionsType = InferActionsTypes<typeof actions>
const appReducer = (state = initialState, action: ActionsType): InitialStateType=> {

    switch (action.type) {
        case 'APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const actions = {
    initializedSuccess : () => ({type: 'APP/INITIALIZED_SUCCESS'} as const)
};


export default appReducer;

export const initializeApp = () => async (dispatch : any) => {
    let dispatchResult = dispatch(getAuth());
    dispatchResult
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
};