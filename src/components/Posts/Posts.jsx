import React from 'react';
import Post from "./Post";
import { useSelector } from "react-redux";

// соединяем со стором

const Posts = () => {;
    const { posts } = useSelector(state => state.posts);
    return (
        <div>
            { posts.length ?
                posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))
                : <p className={'text-center'}>
                    Постов пока нету
                </p>
            }
        </div>
    )
};

export default Posts;