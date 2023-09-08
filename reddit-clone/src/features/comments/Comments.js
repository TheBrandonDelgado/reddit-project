import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments, fetchPostComments } from './commentsSlice';
import Comment from './Comment';

function Comments({ postId }) {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const commentsByPostID = comments[postId];

    useEffect(() => {
        dispatch(fetchPostComments(postId));
    }, [dispatch, postId]);

    if (!commentsByPostID) {
        return (
            <div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }

    return (
        <div>
            {commentsByPostID.map((comment) => (
                <Comment comment={comment} />
            ))}
        </div>
    )
}

export default Comments;