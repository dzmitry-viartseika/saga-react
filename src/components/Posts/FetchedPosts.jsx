import React from 'react';
import Post from "./Post";
import Loader from '../Main/Loader/Loader';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from '../../redux/actions';

const FetchedPost = () => {
    const { fetchedPosts } = useSelector(state => state.posts);
    const isLoader = useSelector(state => state.loaders.isLoader);
    const dispatch = useDispatch();

    const getFetchedPosts = () => {
        dispatch(fetchPosts());
    };

    return (
        <div>
            {
                fetchedPosts.length ?
                    <div className="card">
                        <div className="card-body">
                            {
                                fetchedPosts.map(post => (
                                    <Post
                                        key={post.id}
                                        post={post}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    : <button
                        className={'btn btn-primary'}
                        onClick={getFetchedPosts}
                    >
                        Загрузить
                    </button>
            }
            { isLoader ? <Loader /> : null }
        </div>
    )
};

export default FetchedPost;