import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Page({ id, title, fetched, by, time, kids }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fetched) {
            dispatch({type: 'GET_STORY', id: id})
        }
    }, [fetched, id, dispatch])

    if (!fetched) {
        return (
            <p>Loading Post...</p>
        )
    }
    else {
        return (
            <div className="Post">
                <h1>{title}</h1>
                <p>By: {by}</p>
                <p>Time: {time}</p>
                <p>[{kids}]</p>
            </div>
        );
    }
}