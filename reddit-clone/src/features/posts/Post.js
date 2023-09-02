import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { upvotePost, downvotePost } from './postsSlice';
import './post.css';
import Comments from '../comments/Comments';

function Post({ post }) {
    const dispatch = useDispatch();
    const [ upvote, toggleUpvote ] = useState(null);
    const [ downvote, toggleDownvote ] = useState(null);
    const [ voteScoreColor, setVoteScoreColor ] = useState({color: "#ebebeb"});
    const [ commentsClicked, toggleCommentsClicked ] = useState(false);

    const handleUpvote = (e) => {
        toggleUpvote(!upvote);
        !upvote ? setVoteScoreColor({color: "green"}) : setVoteScoreColor({color: "#ebebeb"});
        if (downvote) {
            toggleDownvote(false);
            dispatch(downvotePost({
                id: post.id,
                downvote
            }));
        }
        dispatch(upvotePost({
            id: post.id,
            upvote
        }));
    }

    const handleDownvote = (e) => {
        toggleDownvote(!downvote);
        !downvote ? setVoteScoreColor({color: "red"}) : setVoteScoreColor({color: "#ebebeb"});
        if (upvote) {
            toggleUpvote(false);
            dispatch(upvotePost({
                id: post.id,
                downvote
            }));
        }
        dispatch(downvotePost({
            id: post.id,
            downvote
        }));
    }

    const handleCommentsClicked = () => {
        toggleCommentsClicked(!commentsClicked);
    }

    function formatVotes(score) {
        if (score >= 1000) {
          const formattedScore = (score / 1000).toFixed(1);
          return `${formattedScore}k`;
        } else {
          return score.toString();
        }
    }

    const getPostAge = (postAgeUnixTimestamp) => {
        const now = new Date();
        const postTime = new Date(postAgeUnixTimestamp * 1000);

        const timeDifferenceMs = now - postTime;
        const hoursAgo = Math.floor(timeDifferenceMs / (1000 * 60 * 60));

        if (hoursAgo === 1) {
            return '1 hour ago';
        } else if (hoursAgo > 1) {
            return `${hoursAgo} hours ago`;
        } else {
            return 'Less than an hour ago';
        }
    }

    return (
        <article>
            <div className='card'>
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <div onClick={handleUpvote}><FontAwesomeIcon icon={faArrowUp} size="xl" style={!upvote ? {color: "#ebebeb"} : {color: "green"}} /></div>
                        <p className='post-votes-value' style={voteScoreColor}>{formatVotes(post.score)}</p>
                        <div onClick={handleDownvote}><FontAwesomeIcon icon={faArrowDown} size="xl" style={!downvote ? {color: "#ebebeb"} : {color: "red"}} /></div>
                    </div>
                    <div className="post-container">
                        <h3 className="post-title">{post.title}</h3>
                        <div className="post-image-container">
                            <img src={post.url} alt="" className="post-image" />
                        </div>
                        <div className="post-details">
                            <span className="author-details">
                                <span className="author-username">{post.author_fullname}</span>
                            </span>
                            <span>{getPostAge(post.created)}</span>
                            <span className="post-comments-container">
                                <div onClick={handleCommentsClicked}><FontAwesomeIcon icon={faComment} size="xl" style={commentsClicked ? {color: "gold", marginRight: 10} : {color: "#ebebeb", marginRight: 10}} /></div>
                                {post.num_comments}
                            </span>
                        </div>
                        {commentsClicked ? <Comments postId={post.id} /> : <div></div> }
                    </div>
                </div>
            </div>
    </article> 
    )
}

export default Post;