import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, fetchPosts, isLoading } from './postsSlice';
import Post from './Post';

function Posts() {
    const dispatch = useDispatch();
    const postsLoading = useSelector(isLoading);
    const posts = useSelector(selectPosts);
    const postsWithImage = posts.filter(post => post.url.includes('i.redd.it'));
    const postsToRender = postsWithImage.length < 5 ? posts : postsWithImage;

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div style={{width: "100%"}}>
            {
                !postsLoading ?
                postsToRender.map((post) => (
                    <Post post={post} />
                )) :
                <div>
                    <Post post={{}}/>
                    <Post post={{}}/>
                    <Post post={{}}/>
                </div>
            }
        </div>
    );
}

export default Posts;