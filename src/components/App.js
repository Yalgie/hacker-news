import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories);

    console.log(stories)

    return (
        <div className="App">
            <button onClick = {
                () => dispatch({
                    type: 'GET_TOP_STORIES',
                    url: "/topstories.json",
                    payload: 'SET_TOP_STORIES',
                })
            }> Click </button>
        </div>
    );
}