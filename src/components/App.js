import React from 'react';
import { useDispatch } from 'react-redux';

export default function App() {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <button onClick={() => dispatch({type: 'TEST'})}></button>
        </div>
    );
}