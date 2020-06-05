import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi! How are you?', like: 5},
        {id: 2, message: 'It\'s my first post!', like: 7}
    ],
    newPostText: 'hi',
    isFetching: false,
    status: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostElement
            return {
                ...state,
                posts: [{id: 3, message: newPost, like: 0}, ...state.posts],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
};
export const addPostActionCreator = (newPostElement) => ({type: ADD_POST, newPostElement})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type:SET_USER_STATUS, status})


export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        })
};
export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(data =>{
        if (data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    })
};

export default profileReducer;