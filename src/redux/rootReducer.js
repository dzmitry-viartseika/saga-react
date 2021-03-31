import { combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducers';
import { loaderReducer } from './reducers/loaderReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    loaders: loaderReducer,
})