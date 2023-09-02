import React from 'react';
import './comment.css';

function Comment({ comment }) {

    const getCommentAge = (commentAgeUnixTimestamp) => {
        const now = new Date();
        const postTime = new Date(commentAgeUnixTimestamp * 1000);

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
        <div className="comment">
            <div className="comment-metadata">
                <p className="comment-author">{comment.data.author}</p>
                <p className="comment-created-time">{getCommentAge(comment.data.created)}</p>
            </div>
            <p className="comment-body">{comment.data.body}</p>
        </div>
    )
}

export default Comment;