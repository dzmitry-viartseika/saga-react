import {SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from '../../constants/mutationsTypes';

const initialState = {
    isLoader: false,
    alert: null,
};

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                isLoader: true
            }
        case HIDE_LOADER: {
            return {
                ...state,
                isLoader: false
            }
        }
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
    }
    return state;
}