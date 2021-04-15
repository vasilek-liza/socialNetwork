import React from 'react';
import Post from './Post';

const MyPost = (props) => {
    
    let postElements = props.state.posts.map (p=> <Post message={p.message} likeCount={p.likeCount} />);
    return (
        <div>{postElements}</div>
    );
}
export default MyPost;

