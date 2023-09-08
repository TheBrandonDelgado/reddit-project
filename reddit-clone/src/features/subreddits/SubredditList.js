import React, { useEffect } from 'react';
import './subreddits.css';
import Subreddit from './Subreddit';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, fetchSubreddits } from './SubredditsSlice';

function SubredditList() {
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <div className="subreddits-wrapper">
            <h2>Subreddits</h2>
            <ul>
            {
                subreddits[0] ?
                subreddits[0].map(subreddit => (
                    <Subreddit subreddit={subreddit} />
                )) :
                <div>
                </div>
            }
            </ul>
        </div>
    )
}

export default SubredditList;