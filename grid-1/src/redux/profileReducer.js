const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', like: 5},
        {id: 2, message: 'It\'s my first post!', like: 7}
    ],
    newPostText: 'hi'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                posts: [{id: 3, message: newPost, like: 0}, ...state.posts ],
                newPostText: ''
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;