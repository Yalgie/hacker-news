import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

const apiBase = "https://hacker-news.firebaseio.com/v0";

function* fetchData(action) {
    const data = yield axios.get(`${apiBase}${action.url}`);
    yield put({
        type: action.payload,
        data,
    });
}

function* getTopStories() {
    yield takeLatest('GET_TOP_STORIES', fetchData)
}
export default function* rootSaga() {
    yield all([
        getTopStories(),
    ]);
};