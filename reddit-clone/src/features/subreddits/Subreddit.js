import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveSubreddit, changeActiveSubreddit, isLoading } from './SubredditsSlice';
import { fetchPostsBySubreddit, fetchPosts } from '../posts/postsSlice';

function Subreddit({ subreddit }) {
    const subredditData = subreddit.data;
    const activeSubreddit = useSelector(selectActiveSubreddit);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (activeSubreddit === subreddit) {
            dispatch(changeActiveSubreddit({}));
            dispatch(fetchPosts());
        } else {
            dispatch(changeActiveSubreddit(subreddit));
            dispatch(fetchPostsBySubreddit(subreddit));
        }
    };

    return (
        <li className={activeSubreddit === subreddit ? "subreddit active" : "subreddit"}>
            <button type="button" onClick={handleClick}>
                <img style={ {border: "solid 3px " + subredditData.primary_color} } src={subredditData.header_img ? subredditData.header_img : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/1280px-Reddit_Logo_Icon.svg.png"} alt={subredditData.title} className="subreddit-icon" />
                <p>{subredditData.title}</p>
            </button>
        </li>
    );
}

export default Subreddit;