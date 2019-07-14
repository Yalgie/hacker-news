import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from "./Story";
import useStyles from "../styles/app";

export default function App() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const stories = useSelector(state => state.stories);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(0);
    const total = (stories.length / 10); // 10 being the max amount of stories per page
    const min = (page * 10);
    const max = (min + 10);
    const storyIds = stories.slice(min, max);
    const activeStories = storyIds.map(data => {
        return <Story 
            key={data.id} 
            id={data.id} 
            title={data.title}  
            fetched={data.fetched}
            by={data.by}
            time={data.time}
            kids={data.kids}
        />
    });

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            dispatch({type: 'GET_TOP_STORIES'});
        }
    }, [setLoaded, dispatch, loaded])

    if (stories.length === 0) {
        return (
            <div className="App"><p>Loading...</p></div>
        )
    }
    return (
        <div className="App">
            <h1>Top Stories</h1>

            { activeStories }

            <p>{ (page + 1) } / { total }</p>
            <br/>
            <button onClick={() => setPage(page - 1)} className={page === 0 ? styles.disable : ''}>Prev</button>
            <button onClick={() => setPage(page + 1)} className={page === (total - 1) ? styles.disable : ''}>Next</button>
        </div>
    );
}