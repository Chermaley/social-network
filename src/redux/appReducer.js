import {getAuth} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const initialState = {
    initialized: false
};
const appReducer = (state = initialState, action) => {

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
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export default appReducer;

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getAuth());
    dispatchResult
        .then(() => {
            dispatch(initializedSuccess());
        });
};