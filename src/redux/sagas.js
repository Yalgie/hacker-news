import { put, takeLatest, all, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';

const apiBase = "https://hacker-news.firebaseio.com/v0";
const stateStories = (state) => state.stories;

function* fetchStories() {
    const data = yield axios.get(`${apiBase}/topstories.json`);
    
    const stories = data.data.map(id => {
        return {
            id: id,
            fetched: false,
            title: null,
            by: null,
            time: null,
            kids: []
        }
    });

    yield put({
        type: 'SET_TOP_STORIES',
        stories,
    });
}

function* fetchStory(action) {
    const data = yield axios.get(`${apiBase}/item/${action.id}.json`);

    let stories = yield select(stateStories)
    
    stories = stories.map(story => {
        if (story.id === action.id) {
            return {
                ...data.data,
                fetched: true,
            };
        }
        else {
            return story;
        }
    })

    yield put({
        type: 'SET_TOP_STORIES',
        stories,
    });
}

function* getTopStories() {
    yield takeLatest('GET_TOP_STORIES', fetchStories)
    yield takeEvery('GET_STORY', fetchStory)
}

export default function* rootSaga() {
    yield all([
        getTopStories(),
    ]);
};