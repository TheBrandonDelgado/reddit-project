import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, fetchPosts } from './postsSlice';
// import { asyncCollectPostIDs } from '../comments/commentsSlice';
import Post from './Post';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsWithImage = posts.filter(post => post.url.includes('i.redd.it'));

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            {
                postsWithImage.map((post) => (
                    <Post post={post} />
                ))
            }
        </div>
    );
}

export default Posts;