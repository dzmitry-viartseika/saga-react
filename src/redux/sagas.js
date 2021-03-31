import {takeEvery, put, call} from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants/mutationsTypes';
import {hideLoader, showAlert, showLoader} from "./actions";
import postsApi from "../api/postsApi/api";


// takeEvery вотчер и сделить за запросом
// put - выполнять некоторые собития со стора
// call - вызвать функцию


export function* sagaWatcher() {
   yield takeEvery(FETCH_POSTS, sagaWatcher)
};

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({
            type: FETCH_POSTS,
            payload,
        })
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'));
        yield put(hideLoader());
    }
}

async function fetchPosts () {
    const { data } = await postsApi.getPostsList();
    return data;
}