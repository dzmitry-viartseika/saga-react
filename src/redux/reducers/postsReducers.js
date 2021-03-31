import { ADD_NEW_POST, FETCH_POSTS } from '../../constants/mutationsTypes';

const initialState = {
    posts: [],
    fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            //    или posts: {state.posts.concat[action.payload]}
            }
        case FETCH_POSTS: {
            return {
                ...state,
                fetchedPosts: action.payload
            }
        }
    }
    return state;
}