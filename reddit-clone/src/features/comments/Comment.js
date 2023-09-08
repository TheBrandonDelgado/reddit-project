import React from 'react';
import './comment.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

    if (!comment) {
        return (
            <SkeletonTheme color='#333' highlightColor='#444'>
                <div className="comment">
                <div className="comment-metadata">
                    <p className="comment-author skeleton"><Skeleton /></p>
                    <p className="comment-created-time skeleton"><Skeleton /></p>
                </div>
                <p className="comment-body"><Skeleton count={3} /></p>
                </div>
            </SkeletonTheme>
        )
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