import {getAuthMe} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
};

export const initializedSuccess = (initialized) => ({type: INITIALIZED_SUCCESS, initialized});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthMe())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
};

export default appReducer